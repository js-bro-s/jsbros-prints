import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JS Bros Prints',
  tagline: 'Small 3D printed fidgets and collectibles designed and sold by JS Bros',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://jsbros-prints.github.io',
  baseUrl: '/',

  organizationName: 'jsbros',
  projectName: 'jsbros-prints',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'catalog',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'JS Bros Prints',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'catalogSidebar',
          position: 'left',
          label: 'Catalog',
        },
        {
          href: 'https://github.com/jsbros/jsbros-prints',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Shop',
          items: [
            {
              label: 'Full Catalog',
              to: '/catalog',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jsbros/jsbros-prints',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} JS Bros Prints. All designs are original.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
