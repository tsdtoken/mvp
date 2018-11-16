import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHome } from '@fortawesome/free-solid-svg-icons'
import styles from './FormPrepare.module.scss'

const FormPrepare = props => (
  <div>
    <div className={styles.label}>Asking price</div>
    <h3>$1,000,000</h3>
    <div className={styles.label}>Reserve</div>
    <h3>$100,000</h3>
    <div className={styles.label}>Token/Cash payout</div>
    <h3>
      5% / $950,000
      <br />
      Until Phase 5
    </h3>
    <div className={styles.label}>Auction ends in</div>
    <div className={styles.auctionEndTime}>2 weeks, 3 days and 14 minutes</div>
    <div className={styles.label}>Date for fundrasing to end</div>
    <div className={styles.auctionEndTime}>3 months after auction win</div>

    <div className={styles.yourListing}>
      <FontAwesomeIcon className={styles.icon} icon={faHome} />
      This is your listing
    </div>

    <div className="mt-3" />

    <div className={styles.shortList}>
      <FontAwesomeIcon className={styles.icon} icon={faStar} />
      Add to shortlist
    </div>

    <div className="mt-3" />

    <div>
      <button className={styles.bid} onClick={props.goBack}>
        Go back to marketplace
      </button>
    </div>
  </div>
)

export default FormPrepare
