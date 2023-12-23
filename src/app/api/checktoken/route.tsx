//
import { NextResponse } from "next/server";
import daj, { Token } from "dajts";

export async function POST(request: any) {
  const { token } = await request.json();
  
  return NextResponse.json(daj.checkTokenSync(Token.toToken(token)));
}