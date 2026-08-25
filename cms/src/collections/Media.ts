import type { CollectionConfig } from "payload";
import { anyone, contentEditor, contentPublisher } from "../access";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
    imageSizes: [
      { name: "card", width: 960, height: 640, position: "centre" },
      { name: "hero", width: 1920, height: 1080, position: "centre" },
    ],
    mimeTypes: ["image/*", "video/*", "application/pdf"],
  },
  admin: {
    useAsTitle: "alt",
  },
  access: {
    create: contentEditor,
    delete: contentPublisher,
    read: anyone,
    update: contentEditor,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "textarea",
    },
  ],
};
