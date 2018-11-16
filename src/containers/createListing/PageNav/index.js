import React from 'react'
import { CREATE_LISTING_STEPS } from '../../../constants'
import styles from './index.module.scss'

const PageNav = props => {
  return (
    <div className={styles.pageNavigation}>
      <h2>Create a new listing</h2>
      <ul>
        <li
          className={
            props.status === CREATE_LISTING_STEPS.S07_LISTING_OPTIONS
              ? styles.completed
              : styles.active
          }>
          1. Set up your land profile
        </li>
        <li
          className={
            props.status === CREATE_LISTING_STEPS.S07_LISTING_OPTIONS
              ? styles.active
              : ''
          }>
          2. Set up listing options
        </li>
      </ul>
    </div>
  )
}

export default PageNav
