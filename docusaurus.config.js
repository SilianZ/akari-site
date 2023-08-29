// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AkariBot (Unofficial)',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://docusaurus-2.netlify.app',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['en', 'zh-Hans', 'zh-Hant'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/SilianZ/akari-site/tree/main',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'AkariBot',
                logo: {
                    alt: 'AkariBot Logo',
                    src: 'img/favicon.ico',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: '文档',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/Teahouse-studios/akari-bot',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            algolia: {
                appId: 'H5CUWFTRHE',
                apiKey: '1ad461050e83cfe36e9667bf07114615',
                indexName: 'akari-bot',
                contextualSearch: true,
            },            
            footer: {
                style: 'dark',
                links: [
                    {
                        title: '联系我们',
                        items: [
                            {
                                label: '哔哩哔哩',
                                href: 'https://space.bilibili.com/406275313',
                            },
                            {
                                label: '官网',
                                href: 'https://teahouse.team/',
                            },
                            {
                                label: '邮件',
                                href: 'mailto:admin@teahou.se'
                            }
                        ],
                    },
                    {
                        title: '更多',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Teahouse-Studios/'
                            },
                        ]
                    },
                ],
                copyright: `版权所有 © ${new Date().getFullYear()} AkariBot. 使用 Docusaurus 构建. 该文档改编自小可 · Wiki`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
