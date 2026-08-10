import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Northstar Connect",
    short_name: "Northstar",
    description: "Independent UK telecom comparison and advisory service",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#07142f",
  };
}
