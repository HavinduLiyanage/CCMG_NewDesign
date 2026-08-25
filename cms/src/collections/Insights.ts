import type { CollectionConfig } from "payload";
import { contentCreate, contentPublisher, contentUpdate, publishedOrStaff } from "../access";

export const Insights: CollectionConfig = {
  slug: "insights",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "_status", "publishedAt"],
  },
  access: {
    create: contentCreate,
    delete: contentPublisher,
    read: publishedOrStaff,
    update: contentUpdate,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 30,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, admin: { position: "sidebar" } },
    { name: "category", type: "text", required: true },
    { name: "excerpt", type: "textarea", required: true },
    { name: "content", type: "richText", required: true },
    { name: "coverImage", type: "upload", relationTo: "media" },
    { name: "publishedAt", type: "date", admin: { position: "sidebar" } },
    { name: "readTime", type: "text", admin: { position: "sidebar" } },
  ],
};
