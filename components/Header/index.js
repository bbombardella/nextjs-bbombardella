import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../public/logo_white.png'
import styles from '../../styles/Header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
    let isOpen = false
    return (
        <Row className={styles['header-container']}>
            <Col>
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <div className={styles['logo-img']}>
                            <Image src={logo} alt="Logo" layout="responsive" />
                        </div>
                    </div>
                    <h1 className={styles.title}>BASTIEN BOMBARDELLA</h1>
                    <div className={styles.menu}>
                        <svg className={styles['menu-img']+" bi bi-list"} onClick={() => isOpen = !isOpen} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                </header>
            </Col>
        </Row>
    )
}