import Image from 'next/image'
import styles from '../../styles/CompetenceCard.module.scss'

export default function CompetenceCard({ data }) {
    return (
        <li className={styles.card}>
            {data.icon!=null ? (
                <Image className={styles.image} src={"https://strapi.bastienbc.fr/"+data.icon.url} alt="" />
            ) : (
                <p className={styles.image}>pas</p>
            )}
            <p className={styles.text}>{data.name}</p>
        </li>
    )
}