import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

const proxy = (request: NextRequest) => {
  const session = getSessionCookie(request);

  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

// TODO : add the matcher
export const config = {
  matcher: ["/waiting"],
};

export default proxy;
