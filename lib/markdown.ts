import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

/**
 * Convert a markdown string into HTML using the unified/remark pipeline.
 *
 * - `gfm` enables GitHub-flavoured markdown (tables, task lists, strikethrough).
 * - `html` serialises the hast tree to a string of HTML.
 *
 * The output is intentionally raw HTML so callers can render it via
 * `dangerouslySetInnerHTML`. Callers are responsible for sanitising
 * untrusted input; the markdown here is authored by the site owner and
 * lives in `content/`, so no extra sanitisation is applied.
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(gfm).use(html).process(markdown);
  return result.toString();
}
