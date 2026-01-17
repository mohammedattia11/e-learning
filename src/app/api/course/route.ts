import { CoursesTable } from "@/db/schema";
import { db } from "@/index";
import { asc } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const result = await db
      .select()
      .from(CoursesTable)
      .orderBy(asc(CoursesTable.id));
    return NextResponse.json(result);
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 },
    );
  }
}
