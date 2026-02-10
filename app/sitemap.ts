import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://gigdevos.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
};

export default sitemap;
