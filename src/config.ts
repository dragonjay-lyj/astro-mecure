import type { Config } from './types';
import { getYear } from 'date-fns';
import { url } from '@/utils/url';

const config: Config = {
  title: 'DragonJay',
  description: 'Turbidity subsides with stillness, yielding clarity; tranquility arises from motion, giving birth to life.',
  author: 'DragonJay',
  favicon: url('favicon.ico'),
  navbar: {
    menu: [
      {
        label: 'Home',
        url: url('/'),
        icon: 'tabler:home'
      },
      {
        label: 'Tag',
        url: url('/tags'),
        icon: 'tabler:tag'
      },
      {
        label: 'Category',
        url: url('/categories'),
        icon: 'tabler:category'
      },
      {
        label: 'Archive',
        url: url('/archive'),
        icon: 'tabler:archive'
      },
      {
        label: 'Link',
        url: url('/friends'),
        icon: 'tabler:heart-handshake'
      },
      {
        label: 'About',
        url: url('/about'),
        icon: 'tabler:info-circle'
      },
    ],
    hasSearchToggle: true,
    hasThemeToggle: true,
  },
  hero: {
    background: import('src/assets/hero-bg.avif'),
    description: 'Welcome to DragonJays corner of the internet! Lets dive into what Ive been working on recently.',
    logo: import('src/assets/logo.svg'),
  },
  sidebar: {
    widgets: [
      {
        name: 'profile',
        author: 'DragonJay',
        description: 'Turbidity subsides with stillness, yielding clarity; tranquility arises from motion, giving birth to life.',
        avatar: import('src/assets/avatar.avif'),
        background: import('src/assets/profile-bg.jpg'),
        socialIcons: [
          {
            label: 'github',
            color: '#7c8690',
            icon: 'tabler:brand-github',
            url: 'https://github.com/dragonjay-lyj'
          },
          {
            label: 'mail',
            color: '#7562c7',
            icon: 'tabler:mail',
            url: 'mailto:lyjcody@foxmail.com'
          }
        ],
      },
      {
        name: 'tag-cloud',
        sortBy: 'count',
        order: 'desc',
        limit: 30,
      },
      {
        name: 'category-tree',
        sortBy: 'count',
        order: 'desc',
        expandDepth: 2,
      },
    ]
  },
  pagination: {
    pageSize: 20,
    hasControls: true,
    hasEdges: false,
    siblings: 2,
    boundaries: 1,
  },
  article: {
    outdateTip: {
      outdateLimit: 180,
    },
    license: {
      licenseName: 'CC BY-NC-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      infoText: 'When reposting or quoting this article, please credit the author and source. Commercial use is prohibited.',
    }
  },
  comment: {
    provider: 'waline',
    options: {
      serverURL: 'https://com.dragonjay.top/',
      meta: ['nick', 'mail', 'link'],
      requiredMeta: ['nick', 'mail'],
      lang: 'en',
      search: true,
      reaction: true,
      commentSorting: 'latest',
      emoji: [
        'https://unpkg.com/@waline/emojis@1.2.0/bilibili',
          'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
          'https://unpkg.com/@waline/emojis@1.2.0/qq',
          'https://unpkg.com/@waline/emojis@1.2.0/tieba',
          'https://unpkg.com/@waline/emojis@1.2.0/weibo',
          'https://unpkg.com/@waline/emojis@1.2.0/soul-emoji'
      ],
    }
  },
  footer: {
    links: [
      { label: 'About', url: url('about')},
      { label: 'Archive', url: url('archive')},
      { label: 'Link', url: url('friends')},
      { label: 'Github', url: 'https://github.com/dragonjay-lyj'},
    ],
    declarations: [
      `Copyright © ${getYear(new Date())} DragonJay All Rights Reserved.`,
    ],
    generator: true,
    rss: true,
    sitemap: true,
  },
  algolia: {
    appId: "4B98ITCGL0",
    apiKey: "dde8d87d9e3c6ee354e56ccf8c9f1849",
    indexName: "dragonjay",
  }
}

export default config;
