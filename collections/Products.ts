import { isSuperAdmin } from "@/lib/access";
import { Tenant } from "@/payload-types";
import { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "artist",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
      admin: {
        description: "Price in Rupiah",
      },
    },
    {
      name: "genre",
      type: "relationship",
      relationTo: "Genre",
      hasMany: false,
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "year",
      type: "number",
      label: "Vinyl year",
      required: true,
    },
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "format",
      label: "Vinyl Format",
      type: "select",
      required: true,
      options: [
        '12" LP',
        '7" Single',
        '10" EP',
        "Picture Disc",
        "Colored Vinyl",
        "Box Set",
      ],
    },
    {
      name: "condition",
      type: "select",
      hasMany: false,
      options: [
        "Mint",
        "Near Mint",
        "Very Good Plus",
        "Very Good",
        "Good",
        "Poor",
      ],
      required: true,
    },
    {
      name: "speed",
      label: "Playback Speed",
      type: "select",
      required: true,
      hasMany: false,
      options: [
        {
          label: "33 ⅓ RPM",
          value: "33_1_3",
        },
        {
          label: "45 RPM",
          value: "45",
        },
        {
          label: "78 RPM",
          value: "78",
        },
      ],
    },
    {
      name: "tracks",
      type: "array",
      required: true,
      label: "Tracks",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "duration",
          type: "text",
          required: true, // or 'number' if you want to store duration in seconds
        },
      ],
    },
  ],
};
