import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "stelo",
	// Meta property used as the default description meta property
	description: "Software Engineer based in Seattle",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-US",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_US",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "stelo",
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
];

/**
 Uses https://www.astroicon.dev/getting-started/
 Find icons via guide: https://www.astroicon.dev/guides/customization/#open-source-icon-sets
 Only installed pack is: @iconify-json/mdi
 */
export const socialLinks: {
	friendlyName: string;
	link: string;
	name: string;
}[] = [
	{
		friendlyName: "Github",
		link: "https://github.com/jfkisafk",
		name: "ph:github-logo-duotone",
	},
	{
		friendlyName: "Linkedin",
		link: "https://www.linkedin.com/in/stelo/",
		name: "ph:linkedin-logo-duotone",
	},
	{
		friendlyName: "Mastodon",
		link: "https://c.im/@stelo",
		name: "ph:mastodon-logo-duotone",
	},
	{
		friendlyName: "Twitter",
		link: "https://twitter.com/indoorkite",
		name: "ph:x-logo-duotone",
	},
	{
		friendlyName: "Mail",
		link: "mailto:contact@stelo.dev",
		name: "ph:envelope-duotone",
	},
];
