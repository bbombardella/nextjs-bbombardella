import Layout from '../components/Layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HomeParticles from '../components/HomeParticles'
import styles from '../styles/Home.module.scss'

export default function home() {
  return (
    <Layout title="Accueil - Bastien">
      <HomeParticles />
    </Layout>
  )
}