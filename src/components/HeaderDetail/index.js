import React from 'react'
import styles from './HeaderDetail.module.scss'

// Header for detail listing page
const Header = props => (
  <div className={styles.header}>
    {props.haveHeader && (
      <h1 className={styles.headerText}>{props.headerText}</h1>
    )}
    <div className={styles.listWrapper}>
      {props.list &&
        props.list.length > 0 &&
        props.list.map(data => (
          <div className={styles.listContent} key={data.text}>
            <div className={styles.textContent}>{data.text}</div>
            <div className={data.isActive ? styles.active : styles.line} />
          </div>
        ))}
    </div>
  </div>
)

export default Header
