import { NextResponse, NextRequest } from "next/server";
import client from "@/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({
    message: "you are signed up",
  });
}

export async function GET() {
  const user = await client.user.findFirst({});
  return Response.json({ name: user?.username, username: user?.username });
}
