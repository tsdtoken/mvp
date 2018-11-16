import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import WinningBadge from '../../../components/WinningBadge'
import styles from './FormFinish.module.scss'

const FormFinish = props => (
  <div className={styles.formFinish}>
    <div className={styles.label}>Asking price</div>
    <h3>$1,000,000</h3>
    <div className={styles.label}>Your winning bid</div>
    <h3>$220,000</h3>
    <div className={styles.label}>Auction ends on</div>
    <div className={styles.auctionEndTime}>13/12/2018</div>

    <div className={styles.badge}>
      <WinningBadge />
    </div>

    <div className={styles.shortList}>
      <FontAwesomeIcon className={styles.icon} icon={faStar} />
      Add to shortlist
    </div>

    <hr className={styles.sep} />

    <div className={styles.label}>
      to secure the land, you will need to raise
    </div>
    <h3>$730,000</h3>
    <div className={styles.label}>in</div>
    <div className={styles.auctionEndTime}>3 months</div>

    <div>
      <Link to="/exit" className={styles.bid}>
        Finalise and list on marketplace
      </Link>
    </div>

    <div className={styles.warning}>
      we recommend you finish the checklist first!
    </div>
  </div>
)

export default FormFinish
