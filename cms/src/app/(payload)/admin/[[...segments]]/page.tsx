import config from "@payload-config";
import { RootPage, generateMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap.js";

export { generateMetadata };

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ segments?: string[] }>;
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  return RootPage({ config, importMap, params, searchParams });
}
