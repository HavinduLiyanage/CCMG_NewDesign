import type { CollectionConfig } from "payload";
import { contentCreate, contentPublisher, contentUpdate, publishedOrStaff } from "../access";

export const Partners: CollectionConfig = {
  slug: "partners",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "order", "_status", "updatedAt"],
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
    maxPerDoc: 20,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, admin: { position: "sidebar" } },
    { name: "logo", type: "upload", relationTo: "media", required: true },
    {
      name: "website",
      type: "text",
      admin: {
        description: "Optional official website URL. Add only when it is verified.",
      },
    },
    { name: "order", type: "number", required: true, defaultValue: 1 },
  ],
};
