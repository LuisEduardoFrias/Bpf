//
import { NextResponse } from "next/server";
import ModelLogin from "m/login";
import daj, { Credentials }from "dajts";

export async function POST(request: any) {
  const { user, password } = await request.json();
  
  const re: any = daj.logoutSync({ user, password } as
  Credentials);

  return NextResponse.json(re);
}