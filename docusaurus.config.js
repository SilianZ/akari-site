// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.okaidia;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AkariBot',
    plugins: [
        [
            'vercel-analytics',
            {
                debug: true,
                mode: 'auto',
            },
        ],
    ],
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
                        'https://github.com/SilianZ/akari-site/edit/main',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    blogTitle: 'Docusaurus blog!',
                    blogDescription: 'A Docusaurus powered blog!',
                    postsPerPage: 'ALL',
                },
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
                        sidebarId: 'docs',
                        position: 'left',
                        label: '文档',
                    },
                    {
                        to: 'blog',
                        label: '博客',
                        position: 'left',
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
                    src: 'img/logo-full.svg',
                    width: 250,
                    href: 'https://teahouse.team/',
                },
                style: 'dark',
                links: [
                    {
                        title: '文档',
                        items: [
                            {
                                label: '服务条款',
                                href: '/docs/policy',
                            },
                            {
                                label: '免责声明',
                                href: '/docs/disclaimer',
                            },
                            {
                                label: '功能',
                                href: '/docs/functions',
                            },
                            {
                                label: '开发',
                                href: '/docs/development',
                            },
                            {
                                label: '帮助',
                                href: '/docs/help',
                            },
                        ],
                    },
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
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Teahouse-Studios/',
                            },
                        ],
                    },
                    {
                        title: '支持',
                        items: [
                            {
                                label: 'Vercel',
                                href: 'https://vercel.com/',
                            },
                            {
                                label: 'Docusaurus',
                                href: 'https://docusaurus.io/',
                            }
                        ]
                    },
                ],
                copyright: `版权所有 © ${new Date().getFullYear()} AkariBot. 
                使用 <a href="https://docusaurus.io/">Docusaurus</a> 构建. 
                改编自<a href="https://bot.teahouse.team/">小可 · Wiki</a>.
                除非另有声明，本网站内容采用<a href="https://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0</a> 授权.`,
            },
            prism: {
                theme: lightTheme,
                darkTheme: darkTheme,
                additionalLanguages: ['bash', 'diff', 'json', 'python', 'toml', 'powershell', 'properties']
            },
        }),
};

module.exports = config;
