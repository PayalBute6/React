import { marked } from "marked";
import DOMPurify from "dompurify";

export function parseMarkdown(markdown: string): string {

    const html = marked.parse(markdown) as string;

    return DOMPurify.sanitize(html);

}