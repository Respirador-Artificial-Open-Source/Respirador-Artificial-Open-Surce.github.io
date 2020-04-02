module.exports = {
  title: 'Respirador Artificial Open Source',
  tagline: 'Reproducibles de bajo costo',
  url: 'https://Respirador-Artificial-Open-Source.github.io',
  baseUrl: '/',
  favicon: 'img/icons8-heart-monitor-64.png',
  organizationName: 'Respirador-Artificial-Open-Source', // Usually your GitHub org/user name.
  projectName: 'Respirador-Artificial-Open-Surce.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'RAOS',
      logo: {
        alt: 'RAOS Logo',
        src: 'img/icons8-heart-monitor-64.png'
      },
      links: [
        {
          to: 'docs/acerca-de',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Respirador-Artificial-Open-Source',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Acerca de',
              to: 'docs/acerca-de'
            },
            {
              label: 'Prototipo principal',
              to: 'docs/prototipo-principal'
            },
            {
              label: 'Interfaz Gráfica',
              to: 'docs/interfaz-windows'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Respirador-Artificial-Open-Source'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RAOS. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
