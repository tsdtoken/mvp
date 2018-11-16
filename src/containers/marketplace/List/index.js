import React from 'react'
import styles from './List.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import ListCard from '../ListCard/'

const SortForm = props => (
  <div className={styles.sortForm}>
    <div className={styles.text}> Sort by</div>
    <div className={styles.selectWrapper}>
      <FontAwesomeIcon icon={faFilter} className={styles.selectIcon} />
      <select id="percent" className={styles.percent}>
        <option value="">{props.sortBy[0]}</option>
        <option value="dog">Test</option>
      </select>
    </div>
    <div className={styles.selectWrapper}>
      <select id="amount">
        <option value="">{props.sortBy[1]}</option>
        <option value="dog">Test</option>
      </select>
    </div>
  </div>
)

const ListView = props => (
  <div className={styles.listViewWrapper}>
    <SortForm sortBy={['% of funds raised', 'Highest - Lowest']} />
    <div className={styles.listWrapper}>
      <div className={styles.text}>Showing 500 results</div>
      <ListCard
        yourListing={true}
        rightContent="listingDetail"
        goToDetail={props.goToDetailLandOwner}
      />
      <ListCard
        halfWidth={true}
        rightContent="fundsRaised"
        goToDetail={props.goToDetailInvestor}
      />
    </div>
  </div>
)

export default ListView
