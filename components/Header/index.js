import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../public/logo_white.png'
import styles from '../../styles/Header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
    console.log(styles);
    return (
        <Row className={styles['header-container']}>
            <Col>
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <Image src={logo} alt="cc" />
                    </div>
                    <h1 className={styles.title}>BASTIEN BOMBARDELLA</h1>
                    <p className={styles.menu}>menu</p>
                </header>
            </Col>
        </Row>
    )
}