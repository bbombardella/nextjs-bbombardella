import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WindowTab from '../WindowTab'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/Layout.module.css'

export default function Layout() {
    return (
        <Container className={styles.container}>
            <Row className={styles.row}>
                <Col xs={12} className={styles.column}>
                    <WindowTab />
                    <Row>
                        <Col>
                            <header>cc header</header>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <main>cc main</main>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}