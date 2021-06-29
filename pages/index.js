import Layout from '../components/Layout'
import HomeParticles from '../components/HomeParticles'
import styles from '../styles/Home.module.scss'

export default function home() {
  return (
    <Layout title="Accueil - Bastien">
      <main className={styles.main}>
        <HomeParticles />
      </main>
    </Layout>
  )
}