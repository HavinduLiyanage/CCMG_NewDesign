import type { CollectionConfig } from "payload";
import { contentEditor, contentPublisher, staffOnly } from "../access";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "status", "createdAt"],
  },
  access: {
    // The public form must post to a rate-limited server action, never directly
    // to this collection's public REST endpoint.
    create: () => false,
    delete: contentPublisher,
    read: staffOnly,
    update: contentEditor,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "organisation", type: "text" },
    { name: "serviceInterest", type: "text" },
    { name: "message", type: "textarea", required: true },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: ["new", "in-progress", "closed"],
    },
  ],
};
