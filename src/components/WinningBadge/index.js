import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import styles from './WinningBadge.module.scss'

const WinningBadge = () => (
  <div className={styles.winningBadge}>
    <FontAwesomeIcon icon={faSmileBeam} className={styles.icon} />
    <span>You won!</span>
  </div>
)

export default WinningBadge
