import type { CollectionConfig } from "payload";
import { contentCreate, contentPublisher, contentUpdate, publishedOrStaff } from "../access";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "order", "_status"],
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
    { name: "role", type: "text", required: true },
    { name: "biography", type: "richText" },
    { name: "portrait", type: "upload", relationTo: "media" },
    { name: "order", type: "number", required: true, defaultValue: 1 },
  ],
};
