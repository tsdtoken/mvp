import React from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faStar,
  faExclamationCircle,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import styles from './MapCard.module.scss'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false
}

const MapCard = props => (
  <div className={`${styles.mapCard} map-card-slick`}>
    <Slider {...settings}>
      {props.images.map((image, key) => (
        <div key={key}>
          <img src={image} alt="" />
        </div>
      ))}
    </Slider>

    <div className={styles.cardContent}>
      <a
        href="/"
        className={styles.cardName}
        onClick={e => {
          e.preventDefault()
          props.goToDetail()
        }}>
        <h3>
          Balranald
          <br />
          Southern New South Wales
        </h3>
      </a>

      {props.progress && (
        <div className={styles.progress}>
          <div className={styles.currentProgress} />
        </div>
      )}

      {props.priceInfo && (
        <div className={styles.priceInfo}>{props.priceInfo}</div>
      )}

      {props.auctionInfo && (
        <div className={styles.auctionInfo}>{props.auctionInfo}</div>
      )}

      <div className={styles.cardFooter}>
        <a
          href="/"
          className={styles.shortList}
          onClick={e => e.preventDefault()}>
          <FontAwesomeIcon icon={faStar} className={styles.cardIcon} />
          Add to shortlist
        </a>

        {props.yourListing && (
          <a
            href="/"
            className={styles.yourListing}
            onClick={e => {
              e.preventDefault()
              props.goToDetail()
            }}>
            <FontAwesomeIcon icon={faHome} className={styles.cardIcon} />
            This is your listing
          </a>
        )}

        {props.outbidded && (
          <a
            href="/"
            className={styles.outbidded}
            onClick={e => e.preventDefault()}>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className={styles.cardIcon}
            />
            You are outbidded
          </a>
        )}

        {props.remind && (
          <a
            href="/"
            className={styles.remind}
            onClick={e => e.preventDefault()}>
            <FontAwesomeIcon icon={faClock} className={styles.cardIcon} />
            Remind me at open
          </a>
        )}
      </div>
    </div>
  </div>
)

export default MapCard
