import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redis } from "@/lib/redis";

export async function GET() {
  const cookieStore = await cookies();
  const hasVisited = cookieStore.get("visited");

  let count = await redis.get<number>("visits");

  if (!hasVisited) {
    count = (count ?? 0) + 1;
    await redis.set("visits", count);

    cookieStore.set("visited", "true", {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: "/",
    });
  }

  return NextResponse.json({ count });
}
