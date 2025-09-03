import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
    const userAgent = req.headers.get('user-agent') || '';
    const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);
    const pathname = req.nextUrl.pathname;

    // Prevent redirect loop for /unauthorized
    if (isMobile && pathname !== '/unauthorized') {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
};
