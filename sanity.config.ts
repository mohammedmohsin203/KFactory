import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "e4fuuhtr",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  schema,
  plugins: [deskTool()],  // Add this line
});
