import React, { useState } from 'react'
import Head from 'next/head'
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
        <>
            <Head>
                <meta name="title" content="Compétences — Bastien Bombardella" />
                <meta name="description" content="Retrouvez toutes mes compétences dans cette page !" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.bastienbc.fr/competences" />
                <meta property="og:title" content="Compétences — Bastien Bombardella" />
                <meta property="og:description" content="Retrouvez toutes mes compétences dans cette page !" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.bastienbc.fr/competences" />
                <meta property="twitter:title" content="Compétences — Bastien Bombardella" />
                <meta property="twitter:description" content="Retrouvez toutes mes compétences dans cette page !" />
            </Head>
            <Layout title="Compétences — Bastien Bombardella">
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
        </>
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