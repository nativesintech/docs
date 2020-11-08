module.exports = {
  title: "Natives in Tech Docs",
  tagline:
    "Searchable documentation for the Natives in Tech GitHub organization",
  url: "https://docs.nativesintech.org",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "nativesintech",
  projectName: "docs",
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
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/nativesintech/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: "977abf334a413942460b7e2ee3c0030f",
      indexName: "nativesintech",
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
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "http://nativesintech.herokuapp.com/",
            },
            {
              label: "Forum",
              href: "https://forum.nativesintech.org",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Native in Tech, Inc. Built with Docusaurus.`,
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
          editUrl: "https://github.com/nativesintech/docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
