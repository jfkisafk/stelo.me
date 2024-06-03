export interface SiteConfig {
	author: string;
	description: string;
	lang: string;
	ogLocale: string;
	title: string;
}

export interface SiteMeta {
	articleDate?: string | undefined;
	description?: string;
	ogImage?: string | undefined;
	title: string;
}
