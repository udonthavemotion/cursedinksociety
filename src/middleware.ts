import type { MiddlewareHandler } from "astro";
import { slugify } from "./lib/slugify";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  if (url.pathname.startsWith("/artists/")) {
    const parts = url.pathname.split("/").filter(Boolean); // ["artists","<slug>"]
    const rawSlug = parts[1] ?? "";

    // Block obviously bad slugs: > 128 chars or containing "data:" or "{"
    if (rawSlug.length > 128 || /data:|{|\[|\]|%7B|%5B/i.test(rawSlug)) {
      return new Response("Invalid slug", { status: 414 }); // URI Too Long / invalid
    }

    const normalized = slugify(rawSlug);
    if (normalized !== rawSlug) {
      url.pathname = `/artists/${normalized}`;
      return Response.redirect(url, 301);
    }
  }
  return next();
};
