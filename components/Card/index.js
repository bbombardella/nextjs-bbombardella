import Image from 'next/image'
import styles from '../../styles/Card.module.scss'

export default function Card({ data }) {
    return (
        <li>
            <a href="" className={styles.card}>
                <Image src={data.url} className={styles['card__image']} alt={data.alt} />
                <div className={styles['card__overlay']}>
                    <div className={styles['card__header']}>
                        <svg className={styles['card__arc']} xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <Image className={styles['card__thumb']} src="https://i.imgur.com/sjLMNDM.png" alt="" />
                        <div className={styles['card__header-text']}>
                            <h3 className={styles['card__title']}>kim Cattrall</h3>
                            <span className={styles['card__status']}>3 hours ago</span>
                        </div>
                    </div>
                    <p className={styles['card__description']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
            </a>
        </li>
    )
}