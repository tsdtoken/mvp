import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Exit.module.scss'

const Home = () => (
  <div className={styles.endContainer}>
    <h2 className={styles.endBigTitle}>
      You have reached the end of this flow.
    </h2>
    <div className={styles.endSubTitle}>
      We hope this experience was easy and understandable throughout the entire
      way. If you have any questions or would like to get in touch, please
      contact us at{' '}
      <a href="/" onClick={e => e.preventDefault()}>
        team@tsd.network
      </a>
      .
    </div>
    <div className={styles.endTitle}>Want to try another path?</div>
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
      <div>
        <a className={styles.exitButton} href="https://tsd.network">
          Exit Demo
        </a>
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
