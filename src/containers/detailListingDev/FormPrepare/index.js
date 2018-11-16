import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './FormPrepare.module.scss'

const FormPrepare = props => (
  <div>
    <div className={styles.label}>Asking price</div>
    <h3>$1,000,000</h3>
    <div className={styles.label}>Last bid</div>
    <h3>$120,000</h3>
    <div className={styles.label}>Auction ends in</div>
    <div className={styles.auctionEndTime}>2 weeks, 3 days and 14 minutes</div>

    <div className={styles.shortList}>
      <FontAwesomeIcon className={styles.icon} icon={faStar} />
      Add to shortlist
    </div>

    <hr className={styles.sep} />

    <div className={styles.outbidded}>
      <FontAwesomeIcon className={styles.icon} icon={faExclamationCircle} />
      You are outbidded
    </div>

    <div className={styles.bidForm}>
      <span className={styles.label}>Recommneded bid</span>
      <input className={styles.bidInput} value="$140,000" readOnly />
      <span className={styles.smallLabel}>
        You will need to bid in 5% increments minimum.
      </span>
    </div>

    <div>
      <button className={styles.bid} onClick={props.bid}>
        Bid
      </button>
      <button className={styles.sendMessage}>Message land owner</button>
    </div>
  </div>
)

export default FormPrepare
