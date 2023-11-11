// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AkariBot',
    favicon: 'img/logo.svg',
    url: 'https://www.akari-bot.top',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
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
            announcementBar: {
                id: 'new_version',
                content:
                    '小可文档已更新至 <a href="https://docusaurus.io/">Docusaurus v3</a>！',
                backgroundColor: '#fafbfc',
                textColor: '#091E42',
                isCloseable: true,
            },
            navbar: {
                title: 'AkariBot',
                logo: {
                    alt: 'AkariBot Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'functions',
                        position: 'left',
                        label: '功能',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'dev',
                        position: 'left',
                        label: '开发',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'help',
                        position: 'left',
                        label: '帮助',
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
                logo: {
                    alt: 'AkariBot Logo',
                    src: 'img/logo.svg',
                    width: 150,
                    height: 150,
                    href: 'https://teahouse.team/',
                },
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
                                href: 'mailto:admin@teahou.se',
                            }
                        ],
                    },
                    {
                        title: '更多',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Teahouse-Studios/',
                            },
                        ]
                    },
                ],
                copyright: '版权所有 © ${new Date().getFullYear()} AkariBot. 使用 Docusaurus 构建. 该文档改编自小可 · Wiki',
            },
            prism: {
                theme: lightTheme,
                darkTheme: darkTheme,
                additionalLanguages: ['bash', 'diff', 'json', 'python', 'toml', 'powershell']
            },
        }),
};

module.exports = config;
