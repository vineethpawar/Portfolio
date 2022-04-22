import React from "react"
import styles from "./Loader.module.css"
function Loader() {
    return (
        <div className={styles.loader}>
            <div className={styles.logo_container}>
                <svg width="100%" height="100%" viewBox="0 0 629 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="vp">
                        <path id={styles.letterv} d="M39.5 7.5H12.5L213 414L384 79H466C511.5 79 551 93 551 131.5" />
                        <path id={styles.letterp} d="M145 112L214.5 258L338 11H470C524.5 11 621.5 36.5 621.5 138.5C621.5 223 565 253 496.5 265.5C496.5 265.5 465 271 432 271V414L364.5 352V228.5" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Loader