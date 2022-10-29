module.exports = {
  title: "Natives in Tech Docs",
  tagline: "Searchable documentation for the Natives in Tech organization",
  url: "https://docs.nativesintech.org",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "nativesintech",
  projectName: "docs",
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Natives in Tech",
      logo: {
        alt: "Natives in Tech Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/beginning",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/nativesintech/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      appId: "GKE8L83V2I",
      apiKey: "a1521a4df76ee75d9b80189738539a13",
      indexName: "nativesintech",
      start_urls: ["https://docs.nativesintech.org/"],
      sitemap_urls: ["https://docs.nativesintech.org/sitemap.xml"],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "About",
              to: "docs/beginning",
            },
            {
              label: "Projects",
              to: "docs/projects",
            },
            {
              label: "Operations",
              to: "docs/operations_about",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://forum.nativesintech.org",
            },
            {
              label: "Talent",
              href: "https://talent.nativesintech.org",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/nativesintech",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/nativesintech",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/company/natives-in-tech",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/nativesintech",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCRyR1Jm77K9uVN1QXvoLY6A?view_as=subscriber",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Native in Tech, Inc. Built with Docusaurus.`,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/nativesintech/docs/edit/latest/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
