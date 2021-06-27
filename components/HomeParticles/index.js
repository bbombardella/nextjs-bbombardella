import React, { useEffect } from "react"
import { tsParticles } from "tsparticles"
import settings from './settings.json'
import styles from '../../styles/Particles.module.scss'

export default function HomeParticles() {
    useEffect(() => {
        const pathseg = require("pathseg")
        tsParticles.load("tsparticles", settings)
    })

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Je suis ...</p>
            <div className={styles.particles} id="tsparticles">
            </div>
        </div>
    )
}