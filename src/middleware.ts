import type { MiddlewareHandler } from "astro";
import { slugify } from "./lib/slugify";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  if (url.pathname.startsWith("/artists/")) {
    const parts = url.pathname.split("/").filter(Boolean); // ["artists","<slug>"]
    const rawSlug = parts[1] ?? "";

    // Enhanced security: Block malicious patterns including XSS, protocol handlers, and path traversal
    const DANGEROUS_PATTERNS = /data:|javascript:|<script|%3Cscript|;base64|onload=|onerror=|onclick=|{|\[|%7B|%5B|\.\.|%2e%2e|vbscript:|file:|about:/i;
    const MAX_SLUG_LENGTH = 100; // Reduced from 128 for additional security

    if (rawSlug.length > MAX_SLUG_LENGTH || DANGEROUS_PATTERNS.test(rawSlug)) {
      return new Response("Invalid request", { status: 400 }); // Bad Request
    }

    const normalized = slugify(rawSlug);
    if (normalized !== rawSlug) {
      url.pathname = `/artists/${normalized}`;
      return Response.redirect(url, 301);
    }
  }
  return next();
};
