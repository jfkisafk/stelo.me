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
	{
		path: "https://cdn.stelo.dev/resumes/default.pdf",
		title: "Resume",
	},
];

/**
 Uses https://www.astroicon.dev/getting-started/
 Find icons via guide: https://www.astroicon.dev/guides/customization/#open-source-icon-sets
 Only installed pack is: @iconify-json/mdi
 */
export const socialLinks: {
	excludeFromFooter?: boolean;
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
		excludeFromFooter: true,
		friendlyName: "Linkedin",
		link: "https://www.linkedin.com/in/stelo/",
		name: "ph:linkedin-logo-duotone",
	},
	{
		excludeFromFooter: true,
		friendlyName: "Mastodon",
		link: "https://c.im/@stelo",
		name: "ph:mastodon-logo-duotone",
	},
	{
		friendlyName: "Mail",
		link: "mailto:contact@stelo.dev",
		name: "ph:envelope-duotone",
	},
	{
		excludeFromFooter: true,
		friendlyName: "Resume",
		link: "https://cdn.stelo.dev/resumes/default.pdf",
		name: "ph:read-cv-logo-duotone",
	},
];
