import { Target, TargetTableProps } from "../lib/types";
import { useEffect, useState } from "react";

export default function TargetTable({ filter }: TargetTableProps) {
  const [targets, setTargets] = useState<Target[]>([]);
 
  useEffect(() => {
    fetch("/api/targets")
      .then((res) => res.json())
      .then((data: Target[]) => {
        const filteredTargets = filter
          ? data.filter((target) => target.pipelineStatus === filter)
          : data;
        const sortedTargets = filteredTargets.sort(
          (a, b) =>
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
        );
        setTargets(sortedTargets);
      })
      .catch((e) => console.error(e));
  }, [filter]);

  const updatePipelineStatus = (
    id: number,
    newStatus: Target["pipelineStatus"]
  ) => {
    fetch("/api/targets", {
      method: "PUT",
      body: JSON.stringify({ id: id, pipelineStatus: newStatus }),
    })
      .then((response) => response.json())
      .catch((e) => console.error(e));

    setTargets((prevTargets) =>
      prevTargets.map((target) =>
        target.id === id ? { ...target, pipelineStatus: newStatus} : target
      )
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-slate-900 text-white table-auto">
        <thead>
          <tr className="bg-slate-800">
            <th className="py-3 px-4 text-left text-sky-300">Name</th>
            <th className="py-3 px-4 text-left text-sky-300">Description</th>
            <th className="py-3 px-4 text-left text-sky-300">
              Pipeline Status
            </th>
            <th className="py-3 px-4 text-left text-sky-300">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {targets.map((target) => (
            <tr key={target.id} className="hover:bg-slate-700 transition">
              <td className="py-2 px-4 border-b border-slate-700">
                {target.name}
              </td>
              <td className="py-2 px-4 border-b border-slate-700">
                {target.description}
              </td>
              <td className="py-2 px-4 border-b border-slate-700">
                <select
                  value={target.pipelineStatus || ""}
                  onChange={(e) =>
                    updatePipelineStatus(
                      target.id,
                      e.target.value as Target["pipelineStatus"]
                    )
                  }
                  className="p-2 border rounded-md bg-slate-800 text-white"
                >
                  <option value="Hot">Hot</option>
                  <option value="Active">Active</option>
                  <option value="Passed">Passed</option>
                  <option value="Cold">Cold</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
              <td className="py-2 px-4 border-b border-slate-700">
                {new Date(target.lastUpdated).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
