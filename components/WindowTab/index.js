import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/WindowTab.module.scss'

export default function WindowTab() {
    return (
        <Row className={styles.section}>
            <Col xs={12} className={styles.column}>
                <svg className={styles.tabs}>
                    <circle cx="15" cy="15" r="6" className={styles.close} />
                    <circle cx="35" cy="15" r="6" className={styles.minimize} />
                    <circle cx="55" cy="15" r="6" className={styles.zoom} />
                </svg>
            </Col>
        </Row>
    )
}