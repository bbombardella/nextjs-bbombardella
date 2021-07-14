import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../../styles/CompetenceCard.module.scss'

export default function CompetenceCard({ data }) {
    return (
        <motion.li initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ scale: 0, opacity: 0.5 }} whileHover={{ y: '-2px', transition: { duration: 0.2 } }} className={styles.card}>
            <div className={styles.image}>
                <Image src={"https://strapi.bastienbc.fr" + data.icon.url} alt="" width="100%" height="100%" />
                <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg"><path d="M 20 40 c 11 0 20 -11 20 -20 v 20 Z" /></svg>
            </div>
            <p className={styles.text}>{data.name}</p>
        </motion.li>
    )
}