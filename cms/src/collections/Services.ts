import type { CollectionConfig } from "payload";
import { contentCreate, contentPublisher, contentUpdate, publishedOrStaff } from "../access";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order", "_status", "updatedAt"],
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
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { position: "sidebar" },
    },
    { name: "summary", type: "textarea", required: true },
    { name: "coverImage", type: "upload", relationTo: "media" },
    { name: "order", type: "number", required: true, defaultValue: 1 },
    { name: "featured", type: "checkbox", defaultValue: false },
    {
      name: "capabilities",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea" },
      ],
    },
  ],
};
