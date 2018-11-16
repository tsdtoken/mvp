import React from 'react'
import styles from './OverviewDetail.module.scss'
import Slider from 'react-slick'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
}

// component for overview , content left will be added when we use component

const Overview = props => (
  <div className={styles.overview}>
    <div className={styles.contentLeft}>{props.contentLeft}</div>
    <div className={styles.contentRight}>
      <Slider {...settings}>
        {props.images.map((image, key) => (
          <img key={key} src={image} alt="" />
        ))}
      </Slider>
    </div>
  </div>
)

export default Overview
