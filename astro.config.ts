import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	// ! Please remember to replace the following site property with your own domain
	site: "https://stelo.dev/",
	integrations: [
		icon(),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
	],
	// https://docs.astro.build/en/guides/prefetch/
	prefetch: true,
	output: "server",
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
});
