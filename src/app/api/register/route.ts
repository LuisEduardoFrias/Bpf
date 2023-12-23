//
import { NextResponse } from "next/server";
import ModelUser from "m/user";
import daj from "dajts";

export async function POST(request: any) {
  const { data } = await request.json();
  
  const user: ModelUser = new ModelUser();
  user.mapper(data);
  
  return NextResponse.json(daj.registerSync(user));
}