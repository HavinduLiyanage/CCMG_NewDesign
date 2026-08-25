import config from "@payload-config";
import { NotFoundPage, generateMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap.js";

export { generateMetadata };

export default function NotFound() {
  return NotFoundPage({ config, importMap });
}
