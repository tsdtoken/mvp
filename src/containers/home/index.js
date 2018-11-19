import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/TSD-logo-white-small.svg'
import styles from './Home.module.scss'

const Home = () => (
  <div className={styles.home}>
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
    <div className={styles.welcomeContainer}>
      <h2 className={styles.welcomeTitle}>Welcome to the TSD Demo</h2>
      <div className={styles.welcomeSubTitle}>what kind of user are you?</div>
      <div className={styles.line} />
      <div className={styles.content}>
        <div>
          <Button value="I am a land owner" link="/createListing" />
        </div>
        <p className={styles.description}>
          In this demo, you will first experience a rough idea on finding,
          measuring, and listing your land in exchange for both cash and TSD
          tokens, as well as seeing your land profile information.
        </p>
        <div>
          <Button value="I am a developer" link="/marketplace/dev" />
        </div>
        <p className={styles.description}>
          As a developer, you will experience the marketplace, viewing a land
          listing from a land owner, and fielding quotes from service providers.
        </p>
        <div>
          <Button value="I am an investor" link="/marketplace" />
        </div>
        <p className={styles.description}>
          Like the developer, you will experience the marketplace and be able to
          view a listing coming from the developer. In this instance, the
          developer is raising funds in order to buy the land owners’ land.
        </p>
      </div>
    </div>
  </div>
)

const Button = props =>
  props.link ? (
    <Link className={styles.defaultButton} to={props.link}>
      {props.value}
    </Link>
  ) : (
    <div className={styles.defaultButton}>{props.value}</div>
  )

export default Home
