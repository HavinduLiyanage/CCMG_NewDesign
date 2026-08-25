import type { CollectionConfig } from "payload";
import { contentCreate, contentPublisher, contentUpdate, publishedOrStaff } from "../access";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "featured", "_status"],
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
    { name: "location", type: "text" },
    { name: "client", type: "text" },
    { name: "partner", type: "text" },
    { name: "investmentValue", type: "text" },
    { name: "summary", type: "textarea", required: true },
    { name: "body", type: "richText" },
    { name: "coverImage", type: "upload", relationTo: "media", required: true },
    {
      name: "gallery",
      type: "array",
      fields: [{ name: "image", type: "upload", relationTo: "media", required: true }],
    },
    {
      name: "metrics",
      type: "array",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "order", type: "number", required: true, defaultValue: 1 },
  ],
};
