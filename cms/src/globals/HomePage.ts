import type { GlobalConfig } from "payload";
import { contentPublisher, publishedOrStaff } from "../access";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "Home page",
  access: {
    read: publishedOrStaff,
    update: contentPublisher,
  },
  versions: {
    drafts: {
      autosave: true,
    },
    max: 30,
  },
  fields: [
    {
      type: "group",
      name: "hero",
      fields: [
        { name: "eyebrow", type: "text", required: true },
        { name: "title", type: "textarea", required: true },
        { name: "summary", type: "textarea", required: true },
        { name: "primaryCtaLabel", type: "text", required: true },
        { name: "primaryCtaHref", type: "text", required: true },
        { name: "secondaryCtaLabel", type: "text", required: true },
        { name: "secondaryCtaHref", type: "text", required: true },
      ],
    },
    {
      name: "stats",
      type: "array",
      minRows: 2,
      maxRows: 4,
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    {
      name: "featuredCaseStudy",
      type: "relationship",
      relationTo: "case-studies",
    },
    {
      name: "faqs",
      type: "array",
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
    {
      type: "group",
      name: "closingCta",
      fields: [
        { name: "title", type: "textarea", required: true },
        { name: "summary", type: "textarea" },
        { name: "label", type: "text", required: true },
      ],
    },
  ],
};
