import {
  BarChart as RechartBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { BarChartData, BarChartProps, Target } from "../lib/types";

export default function BarChart({ filter }: BarChartProps) {
  const [data, setData] = useState<BarChartData[]>([]);

  useEffect(() => {
    fetch("/api/targets")
      .then((res) => res.json())
      .then((targets: Target[]) => {
        const filteredTargets = filter
          ? targets.filter((target) => target.pipelineStatus === filter)
          : targets;

        const statusCount: Record<string, number> = filteredTargets.reduce(
          (acc, target) => {
            if (target.pipelineStatus) {
              acc[target.pipelineStatus] =
                (acc[target.pipelineStatus] || 0) + 1;
            }
            return acc;
          },
          {} as Record<string, number>
        );

        setData(
          Object.keys(statusCount).map((key) => ({
            status: key,
            count: statusCount[key],
          }))
        );
      });
  }, [filter]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartBarChart data={data} barCategoryGap="20%">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="status" />
        <YAxis />
        <Tooltip/>
        <Bar dataKey="count" fill="#38bdf8" barSize={50}/>
      </RechartBarChart>
    </ResponsiveContainer>
  );
}
