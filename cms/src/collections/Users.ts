import type { CollectionConfig } from "payload";
import { ownerOnly, staffOnly } from "../access";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    tokenExpiration: 3600,
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
  },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "role", "updatedAt"],
  },
  access: {
    admin: staffOnly,
    create: ownerOnly,
    delete: ownerOnly,
    read: ownerOnly,
    update: ownerOnly,
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      saveToJWT: true,
      options: [
        { label: "Owner", value: "owner" },
        { label: "Publisher", value: "publisher" },
        { label: "Editor", value: "editor" },
        { label: "Viewer", value: "viewer" },
      ],
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};
