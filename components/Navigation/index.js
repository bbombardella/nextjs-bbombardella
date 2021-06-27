import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../../styles/Navigation.module.scss'

export default function Navigation() {
    const [isOpen, setOpen] = useState(false)
    if (isOpen) {
        return (
            <div className={styles.full}>
                <p onClick={() => setOpen(!isOpen)}>cc</p>
                <ul>
                    <li>
                        <Link href="/ds">
                            <a>Accueil</a>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className={styles.menu}>
                <svg className={styles['menu-img'] + " bi bi-list"} onClick={() => setOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
        )
    }
}