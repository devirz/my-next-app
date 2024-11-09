import { NextResponse, type NextRequest } from "next/server";
import rjdl from "../rjdl";

export const GET = async (request: NextRequest) => {
  // Return Response
  return NextResponse.json(
    {
      pk: true,
      msg: 'hello'
    },
    {
      status: 200,
    }
  );
};

/**
 * Basic POST Request to simuluate CREATE in LCRUD
 * @param request
 */
export const POST = async (request: NextRequest) => {
  // Get JSON payload
  const data = await request.json();
  const result = await rjdl(data.url)
  // Return Response
  return NextResponse.json(
    {
      result,
    },
    {
      status: 200,
    }
  );
};