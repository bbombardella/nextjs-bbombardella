import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WindowTab from '../WindowTab'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/Layout.module.scss'
import Header from '../Header'

export default function Layout({ title = "Bastien", children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:image" content="https://www.bastienbc.fr/seo.png" />
                <meta property="twitter:image" content="https://www.bastienbc.fr/seo.png" />
                <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
            </Head>

            <Container className={styles.container}>
                <Row className={styles.row}>
                    <Col xs={12} className={styles.column}>
                        <WindowTab />
                        <Header />
                        <Row className={styles['row-main']}>
                            <Col className={styles['col-main']}>
                                {children}
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}