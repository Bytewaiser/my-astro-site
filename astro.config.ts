import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeMathJax],
          extendDefaultPlugins: true,
	},
	site: "https://hasanhyurdagul.com",
	integrations: [
		tailwind({
			config: { applyBaseStyles: false },
		}),
		image(),
		sitemap(),
	],
});
