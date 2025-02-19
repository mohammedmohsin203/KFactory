import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "product",
      title: "Auto Parts",
      type: "document",
      fields: [
        {
          name: "id",
          title: "Part Number",
          type: "number",
          validation: (Rule) =>
            Rule.required().integer().positive().greaterThan(100),
        },
        {
          name: "name",
          title: "Part Name",
          type: "string",
        },
        {
          name: "images",
          type: "array",
          title: "Product Images",
          of: [{ type: "image" }],
        },
        {
          name: "compatibleVehicles",
          title: "Compatible Vehicles",
          type: "array",
          of: [{ type: "string" }],
          description: "List of compatible vehicle makes and models",
        },
        {
          name: "yearRange",
          title: "Year Range",
          type: "object",
          fields: [
            { name: "from", type: "number", title: "From Year" },
            { name: "to", type: "number", title: "To Year" },
          ],
        },
        {
          name: "condition",
          title: "Condition",
          type: "string",
          options: {
            list: ["New", "Refurbished", "Used"],
          },
        },
        {
          name: "specifications",
          title: "Specifications",
          type: "object",
          fields: [
            { name: "material", type: "string", title: "Material" },
            { name: "weight", type: "string", title: "Weight" },
            { name: "dimensions", type: "string", title: "Dimensions" },
            { name: "oemNumber", type: "string", title: "OEM Number" },
          ],
        },
        {
          name: "price",
          title: "Price",
          type: "number",
        },
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "installation",
          title: "Installation Guide",
          type: "text",
        },
        {
          name: "warranty",
          title: "Warranty Information",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
          },
        },
        {
          name: "showOnHomePage",
          title: "Show on Home Page",
          type: "boolean",
        },
        {
          name: "inStock",
          title: "In Stock",
          type: "boolean",
        },
        {
          name: "category",
          title: "Part Category",
          type: "reference",
          to: [
            {
              type: "category",
            },
          ],
        },
        {
          name: "brand",
          title: "Part Brand",
          type: "reference",
          to: [
            {
              type: "brand",
            },
          ],
        },
        {
          name: "vehicleType",
          title: "Vehicle Type",
          type: "reference",
          to: [
            {
              type: "vehicleType",
            },
          ],
        },
      ],
    },
    {
      name: "category",
      type: "document",
      title: "Categories",
      fields: [
        {
          name: "name",
          title: "Category Name",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
          },
        },
        {
          name: "description",
          title: "Category Description",
          type: "text",
        },
        {
          name: "image",
          title: "Category Image",
          type: "image"
        },
      ],
    },
    {
      name: "brand",
      type: "document",
      title: "Brands ",
      fields: [
        {
          name: "name",
          title: "Brand Name",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
          },
        },
        {
          name: "description",
          title: "Brand Description",
          type: "text",
        },
        {
          name: "image",
          title: "Brand Image",
          type: "image"
        },
      ],
    },
    {
      name: "vehicleType",
      type: "document",
      title: "Vehicle Types",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
          options: {
            list: ["Car", "Motorcycle", "Commercial Vehicle"],
          },
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
          },
        },
      ],
    },
  ],
};