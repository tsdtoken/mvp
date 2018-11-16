import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styles from './FormPrepare.module.scss'

const FormPrepare = props => (
  <div>
    <div className={styles.fundsRaised}>Funds raised thus far</div>
    <div className={styles.progress}>
      <div className={styles.currentProgress} />
    </div>
    <div className={styles.fundsRaisedStatus}>
      $800,000 of $1,000,000 raised
      <br />
      for Stage 3 from 53 users!
    </div>

    <div className={styles.label}>required to hit funding target</div>
    <h3>$200,000</h3>
    <div className={styles.label}>Ends in</div>
    <div className={styles.auctionEndTime}>2 weeks, 3 days and 14 minutes</div>

    <div className={styles.shortList}>
      <FontAwesomeIcon className={styles.icon} icon={faStar} />
      Add to shortlist
    </div>

    <hr className={styles.sep} />

    <div className={styles.bidForm}>
      <span className={styles.label}>Invest</span>
      <input
        className={styles.bidInput}
        value="$1000 for 500 TSD Tokens"
        readOnly
      />
    </div>

    <div>
      <Link className={styles.bid} to="/exit">
        Commit
      </Link>
      <button className={styles.sendMessage}>Message developer</button>
    </div>
  </div>
)

export default FormPrepare
