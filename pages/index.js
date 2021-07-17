import Head from 'next/head'
import Layout from '../components/Layout'
import HomeParticles from '../components/HomeParticles'
import styles from '../styles/Home.module.scss'

export default function home() {
  return (
    <>
      <Head>
        <meta name="title" content="Accueil — Bastien Bombardella" />
        <meta name="description" content="Bienvenu.e.s sur mon site ! Retrouvez toutes les informations me concernant dans celui-ci" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bastienbc.fr/" />
        <meta property="og:title" content="Accueil — Bastien Bombardella" />
        <meta property="og:description" content="Bienvenu.e.s sur mon site ! Retrouvez toutes les informations me concernant dans celui-ci" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.bastienbc.fr/" />
        <meta property="twitter:title" content="Accueil — Bastien Bombardella" />
        <meta property="twitter:description" content="Bienvenu.e.s sur mon site ! Retrouvez toutes les informations me concernant dans celui-ci" />
      </Head>
      <Layout title="Accueil — Bastien Bombardella">
        <main className={styles.main}>
          <HomeParticles />
        </main>
      </Layout>
    </>
  )
}