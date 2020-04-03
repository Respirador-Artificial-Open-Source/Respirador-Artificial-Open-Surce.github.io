import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Reproduce</>,
    imageUrl: 'img/undraw_abstract.svg',
    description: (
      <>
        Crea tu propio respirador artificial siguiendo los paso de la documentacion.
      </>
    )
  },
  {
    title: <>Fuente abierta</>,
    imageUrl: 'img/undraw_open_source.svg',
    description: (
      <>
        Documentamos y compartimos bajo licencia abierta prototipos encontrados por Internet. tanto plano como codigo.
      </>
    )
  },
  {
    title: <>Contribuye</>,
    imageUrl: 'img/undraw_good_team.svg',
    description: (
      <>
        Tambien puede contribuir al proyecto, ya sea aportando conocimiento, trabajo o a traves de donaciones para montar los respiradores y donarlos a los hospitales.
      </>
    )
  }
]

function Feature ({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Prototipos de respiradores artificiales de bajo costo'
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg mx-sm',
                styles.getStarted
              )}
              to={useBaseUrl('docs/prototipo-principal')}
            >
              Empezar a construir
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg mx-sm',
                styles.getStarted
              )}
              to={useBaseUrl('blog')}
            >
              Novedades
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
