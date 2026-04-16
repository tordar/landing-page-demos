"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/studio-config";

export default function StudioClient() {
  return <NextStudio config={config} />;
}
