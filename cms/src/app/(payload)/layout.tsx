import type { Metadata } from "next";
import config from "@payload-config";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import { importMap } from "./admin/importMap.js";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CCMG Content CMS",
  description: "Secure content management for Colombo Consultants & Management Group.",
};

export default function PayloadLayout({ children }: { children: ReactNode }) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={handleServerFunctions}>
      {children}
    </RootLayout>
  );
}
