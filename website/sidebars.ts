import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  catalogSidebar: [
    'index',
    {
      type: 'category',
      label: 'Fidgets',
      items: ['fidget-cube', 'click-button-fidget', 'gear-spinner'],
    },
    {
      type: 'category',
      label: 'Collectibles',
      items: ['mini-sword-keychain', 'roblox-figure', 'articulated-dragon'],
    },
    {
      type: 'category',
      label: 'Games & Toys',
      items: ['spinning-top', 'dice-set'],
    },
    {
      type: 'category',
      label: 'Practical',
      items: ['phone-stand'],
    },
    {
      type: 'category',
      label: 'Custom',
      items: ['name-tag-badge'],
    },
  ],
};

export default sidebars;
