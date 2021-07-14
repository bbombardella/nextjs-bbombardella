import React, { useState } from 'react'
import Layout from '../components/Layout'
import CompetenceCard from '../components/CompetenceCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import styles from '../styles/Competences.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Competences({ competences, categories }) {

    const [comp, setComp] = useState(competences);
    const [isLoading, setisLoading] = useState(false)

    function handleFilter(filter) {
        setisLoading(true)

        if (filter === "Tous") {
            setComp(competences)
        } else {
            setComp(filter.competences)
        }

        setTimeout(() => {
            setisLoading(false)
        }, 500)
    }

    return (
        <Layout title="Compétences - Bastien">
            <main>
                <Row>
                    <Col xs={12}>
                        <h1 className={styles.title}>Mes compétences</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ul className={styles.categories}>
                            <li onClick={() => { handleFilter("Tous") }}>Tous</li>
                            {categories.map((item, index) => (
                                <li key={index} onClick={() => { handleFilter(item) }}>{item.name}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AnimatePresence>
                            {!isLoading &&
                                <motion.ul exit={{ opacity: 0 }} className={styles.competences}>
                                    {comp.map((competence, index) => (
                                        <CompetenceCard key={index} data={competence} />
                                    ))}
                                </motion.ul>
                            }
                        </AnimatePresence>
                    </Col>
                </Row>
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    let res = await fetch('https://strapi.bastienbc.fr/competences')
    const competences = await res.json()
    res = await fetch('https://strapi.bastienbc.fr/catcompetences')
    const categories = await res.json()

    return {
        props: {
            competences,
            categories
        },
    }
}