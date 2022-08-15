import Navigation from '../Navigation'
import Link from 'next/link'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../public/logo_white.png'
import styles from '../../styles/Header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
    return (
        <Row className={styles['header-container']}>
            <Col>
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <div className={styles['logo-img']}>
                            <Link href="/" passHref>
                                <Image src={logo} alt="Logo" layout="responsive" priority />
                            </Link>
                        </div>
                    </div>
                    <h1 className={styles.title}>BASTIEN BOMBARDELLA</h1>
                    <Navigation />
                </header>
            </Col>
        </Row>
    )
}
