import Image from 'next/image'
import styles from '../../styles/CompetenceCard.module.scss'

export default function CompetenceCard({ data }) {
    return (
        <li className={styles.card}>
            <div className={styles.image}>
                <Image src={"https://strapi.bastienbc.fr" + data.icon.url} alt="" width="100%" height="100%" />
                <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path d="M 20 40 c 11 0 20 -11 20 -20 v 20 Z" /></svg>  
            </div>
            <p className={styles.text}>{data.name}</p>
        </li>
    )
}