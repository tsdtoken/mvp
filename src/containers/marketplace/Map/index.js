import React from 'react'
import map from '../../../images/map.png'
import MapCard from '../MapCard/'
import styles from './Map.module.scss'
import image from '../../../images/image.png'
import image3 from '../../../images/image3.png'

const Map = props => (
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
        goToDetail={props.goToDetailLandOwner}
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
        yourListing={!props.dev}
        outbidded={props.dev}
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
        goToDetail={props.goToDetailInvestor}
        images={[image3, image3]}
        progress
        priceInfo={
          <span>
            $800,000 of $1,000,000 raised
            <br />
            for Stage 3 from 54 users!
          </span>
        }
        auctionInfo={
          <span>
            $200,000 required to hit funding target in
            <br />2 weeks, 3 days and 14 minutes
          </span>
        }
        remind={props.dev}
      />
    </div>
  </div>
)

export default Map
