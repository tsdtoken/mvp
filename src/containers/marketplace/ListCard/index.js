import React from 'react'
import styles from './ListCard.module.scss'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faHome,
  faExclamationCircle,
  faClock
} from '@fortawesome/free-solid-svg-icons'

import sampleImage1 from '../../../images/image.png'
import sampleImage3 from '../../../images/image3.png'

const imageScr = [sampleImage1, sampleImage3]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const ContentLeft = props => (
  <div
    className={
      props.halfWidth
        ? styles.contentLeft + ' ' + styles.halfWidth
        : styles.contentLeft
    }>
    <div className={styles.title} onClick={props.goToDetail}>
      {props.title}
    </div>
    <div className={styles.description}>
      We are pleased to offer for sale this exceptional property which
      represents a significant land holding in the heart of central NSW. The
      property is situated on the Newell Highway. There is a total land area of
      1000 hectares.
      <br />
      The zoning allows for solar and/or energy storage facilities close to grid
      connection that has capacity.
    </div>
    <div className={styles.addToShortlist}>
      <FontAwesomeIcon icon={faStar} fixedWidth />
      Add to shortlist
    </div>
    {props.yourListing ? (
      <div className={styles.yourListing}>
        <FontAwesomeIcon icon={faHome} fixedWidth />
        This is your listing
      </div>
    ) : (
      ''
    )}
    {props.outbidded ? (
      <div className={styles.outbidded}>
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className={styles.cardIcon}
        />
        You are outbidded
      </div>
    ) : (
      ''
    )}
    {props.remind ? (
      <div className={styles.remind}>
        <FontAwesomeIcon icon={faClock} className={styles.cardIcon} />
        Remind me at open
      </div>
    ) : (
      ''
    )}
  </div>
)

const ContentRight = props =>
  props.rightContent === 'listingDetail' ? (
    <div className={styles.contentRight}>
      <div className={styles.title}>Listing details</div>
      <div className={styles.amount}>Sale price: $1,000,000</div>
      <div className={styles.amount}>Last Bid: $120,000</div>
      <div className={styles.description}>
        Auction ends in
        <div className={styles.countdown}>2 weeks, 3 days and 14 minutes</div>
      </div>
    </div>
  ) : props.rightContent === 'fundsRaised' ? (
    <div className={styles.contentRight + ' ' + styles.halfWidth}>
      <div className={styles.title}>funds raised thus far</div>
      <div className={styles.fundsBar} />
      <div className={styles.fundsAmount}>
        $800,000 of $1,000,000 raised for Stage 3<div>from 53 users!</div>
      </div>
      <div className={styles.description}>
        $200,000 required to hit funding target in
        <div className={styles.countdown}>2 weeks, 3 days and 14 minutes</div>
      </div>
    </div>
  ) : props.rightContent === 'listingDetailDev' ? (
    <div className={styles.contentRight}>
      <div className={styles.title}>Listing details</div>
      <div className={styles.amount}>Sale price: $1,000,000</div>
      <div className={styles.amount}>Reserve: $100,000</div>
      <div className={styles.description}>
        Auction begins in
        <div className={styles.countdown}>2 weeks</div>
      </div>
    </div>
  ) : (
    ''
  )

const ListCard = props => (
  <div className={styles.listItemWrapper + ' list-customized-slick'}>
    <Slider {...settings}>
      <div className={styles.slideItem}>
        <img src={imageScr[0]} alt="" />
      </div>
      <div className={styles.slideItem}>
        <img src={imageScr[1]} alt="" />
      </div>
      <div className={styles.slideItem}>
        <img src={imageScr[0]} alt="" />
      </div>
    </Slider>
    <div className={styles.content}>
      <ContentLeft {...props} />
      <ContentRight rightContent={props.rightContent} />
    </div>
  </div>
)

export default ListCard
