import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WindowTab from '../WindowTab'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/Layout.module.scss'
import Header from '../Header'

export default function Layout({ children }) {
    return (
        <>
            <Container className={styles.container}>
                <Row className={styles.row}>
                    <Col xs={12} className={styles.column}>
                        <WindowTab />
                        <Header />
                        <Row>
                            <Col>
                                <main className={styles.main}>
                                    {children}
                                </main>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}