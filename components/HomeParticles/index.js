import React, { useEffect } from "react"
import Typewriter from 'typewriter-effect'
import { tsParticles } from "tsparticles"
import settings from './settings.json'
import strings from './strings.json'
import styles from '../../styles/Particles.module.scss'

export default function HomeParticles() {
    useEffect(() => {
        const pathseg = require("pathseg")
        tsParticles.load("tsparticles", settings)
    })

    return (
        <div className={styles.wrapper}>
            <span className={styles.text}>Je suis<span> </span>
                <Typewriter className={styles.text}
                    options={{
                        strings: strings,
                        autoStart: true,
                        loop: true,
                        cursor: "_"
                    }}
                />
            </span>
            <div className={styles.particles} id="tsparticles">
            </div>
        </div>
    )
}
