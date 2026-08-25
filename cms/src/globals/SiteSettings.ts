import type { GlobalConfig } from "payload";
import { contentPublisher, publishedOrStaff } from "../access";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site settings",
  access: {
    read: publishedOrStaff,
    update: contentPublisher,
  },
  versions: {
    drafts: true,
    max: 20,
  },
  fields: [
    { name: "companyName", type: "text", required: true },
    { name: "tagline", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text", required: true },
    { name: "location", type: "text", required: true },
    { name: "linkedinUrl", type: "text" },
    { name: "defaultSeoTitle", type: "text", required: true },
    { name: "defaultSeoDescription", type: "textarea", required: true },
  ],
};
