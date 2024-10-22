import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import targetsData from "../../../data/targets.json";

export async function GET() {
  return NextResponse.json(targetsData);
}

export async function PUT(req: Request) {
  const { id, pipelineStatus } = await req.json();
  const targetIndex = targetsData.findIndex((target) => target.id === id);

  if (targetIndex === -1) {
    return NextResponse.json({ error: "Target not found" }, { status: 404 });
  }

  // Update the pipeline status and date
  targetsData[targetIndex].pipelineStatus = pipelineStatus;
  targetsData[targetIndex].lastUpdated = new Date().toISOString()

  // updating the JSON file
  fs.writeFileSync(
    path.join(process.cwd(), "data/targets.json"),
    JSON.stringify(targetsData, null, 2)
  );

  return NextResponse.json(targetsData[targetIndex]);
}
