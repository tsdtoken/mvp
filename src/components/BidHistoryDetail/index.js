import React from 'react'
import styles from './BidHistoryDetail.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const mockData = [
  {
    time: '12:50:21pm',
    developerName: 'Name of developer',
    bidded: '$120,000',
    percentLastBid: '+5%',
    action: 'See developer profile'
  },
  {
    time: '12:50:21pm',
    developerName: 'Name of developer',
    bidded: '$120,000',
    percentLastBid: '+5%',
    action: 'See developer profile'
  },
  {
    time: '12:50:21pm',
    developerName: 'Name of developer',
    bidded: '$120,000',
    percentLastBid: '+5%',
    action: 'See developer profile'
  },
  {
    time: '12:50:21pm',
    developerName: 'Name of developer',
    bidded: '$120,000',
    percentLastBid: '+5%',
    action: 'See developer profile'
  },
  {
    time: '12:50:21pm',
    developerName: 'Name of developer',
    bidded: '$120,000',
    percentLastBid: '+5%',
    action: 'See developer profile'
  }
]

const bidHistoryList = mockData.map((s, i, a) => (
  <li key={i} className={i === a.length - 1 ? styles.lastRow : ''}>
    <div className={styles.time}>{s.time}</div>
    <div className={styles.developerName}>{s.developerName}</div>
    <div className={styles.bidded}>{s.bidded}</div>
    <div className={styles.percentLastBid}>{s.percentLastBid}</div>
    <div className={styles.action}>
      {s.action}
      <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
    </div>
  </li>
))

const bidHistoryHeader = (
  <div className={styles.bidHistoryHeader}>
    <div className={styles.time}>time</div>
    <div className={styles.developerName}>developer name</div>
    <div className={styles.bidded}>bidded</div>
    <div className={styles.percentLastBid}>% from last bid</div>
    <div className={styles.action}>actions</div>
  </div>
)

const BidHistory = () => (
  <div className={styles.bidHistory}>
    <h3>Bid History</h3>
    {bidHistoryHeader}
    <ul>{bidHistoryList}</ul>
    <div className={styles.viewMoreBid}>View more bid history</div>
  </div>
)

export default BidHistory
