//
import { NextResponse } from "next/server";
import ModelLogin from "m/login";
import daj, { Credentials }from "dajts";

export async function POST(request: any) {
  const { data } = await request.json();
  
  const re: any = daj.loginSync({ user: data.user, password:data.password} as
  Credentials);

  return NextResponse.json(re);
}