import React from 'react'
import map from '../../../images/map.png'
import MapCard from '../../marketplace/MapCard/'
import styles from './Map.module.scss'
import image from '../../../images/image.png'
import image3 from '../../../images/image3.png'

const MapDev = props => (
  <div className={styles.map}>
    <img src={map} alt="map" />

    <div
      style={{
        position: 'absolute',
        top: 0,
        left: '22%'
      }}>
      <MapCard
        title={
          <span>
            Balranald
            <br />
            Southern New South Wales
          </span>
        }
        goToDetail={props.goToDetail}
        images={[image, image]}
        priceInfo={
          <span>
            Sale price: $1,000,000
            <br />
            Last Bid: $120,000
          </span>
        }
        auctionInfo={
          <span>
            Auction ends in
            <br />2 weeks, 3 days and 14 minutes
          </span>
        }
        outbidded
      />
    </div>

    <div
      style={{
        position: 'absolute',
        top: '28%',
        left: '60%'
      }}>
      <MapCard
        title={
          <span>
            Barmedman
            <br />
            Southern New South Wales
          </span>
        }
        goToDetail={props.goToDetail}
        images={[image3, image3]}
        priceInfo={
          <span>
            Sale price: $1,000,000
            <br />
            Reserve: $100,000
          </span>
        }
        auctionInfo={
          <span>
            Auction begins in
            <br />2 weeks
          </span>
        }
        remind
      />
    </div>
  </div>
)

export default MapDev
