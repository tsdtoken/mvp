import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlusSquare,
  faStar,
  faWallet,
  faComments,
  faStore
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from './Sidebar.module.scss'

const Sidebar = props => (
  <div className={styles.sidebar}>
    <Link to="/" onClick={props.reset ? props.reset : null}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </Link>
    <Link to={props.link} className={props.isCreate ? styles.activeLink : ''}>
      <div className={styles.linkWrapper}>
        <FontAwesomeIcon icon={faPlusSquare} fixedWidth />
      </div>
    </Link>
    <Link to={props.link} className={props.isMarket ? styles.activeLink : ''}>
      <div className={styles.linkWrapper}>
        <FontAwesomeIcon icon={faStore} fixedWidth />
      </div>
    </Link>
    <Link to={props.link}>
      <div className={styles.linkWrapper}>
        <FontAwesomeIcon icon={faStar} fixedWidth />
      </div>
    </Link>
    <Link to={props.link}>
      <div className={styles.linkWrapper}>
        <FontAwesomeIcon icon={faWallet} fixedWidth />
      </div>
    </Link>
    <Link to={props.link}>
      <div className={styles.linkWrapper}>
        <FontAwesomeIcon icon={faComments} fixedWidth />
      </div>
    </Link>
  </div>
)

export default Sidebar
