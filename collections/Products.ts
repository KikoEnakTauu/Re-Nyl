import { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
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
        description: "Price in Rupiah"
      }
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
  ],
};
