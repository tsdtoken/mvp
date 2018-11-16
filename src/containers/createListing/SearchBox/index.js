import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.scss'

const SearchBox = props => (
  <div className={styles.searchWrapper}>
    <input placeholder="Search for location" type="text" />
    <span className={styles.searchIcon}>
      <FontAwesomeIcon icon={faSearch} fixedWidth />
    </span>
  </div>
)

export default SearchBox
