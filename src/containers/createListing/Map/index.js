import React from 'react'
import { selectParcelsData } from '../../../modules/createListing'
import { connect } from 'react-redux'
import { CREATE_LISTING_STEPS } from '../../../constants'
import styles from './index.module.scss'

/**
 *
 * Initial status CREATE_LISTING_STEPS.S01_SHOW_MAP
 */
const CustomMap = props => {
  const updateStatus = () => {
    if (props.status === CREATE_LISTING_STEPS.S01_SHOW_MAP) {
      props.selectParcelsData({
        status: CREATE_LISTING_STEPS.S02_SELECT_PARCEL
      })
    }
  }

  const getMapImg = () => {
    var _src = require('../../../images/map-step-01.png'),
      _status = props.status
    if (_status === CREATE_LISTING_STEPS.S01_SHOW_MAP) {
      _src = require('../../../images/map-step-01.png')
    } else if (_status === CREATE_LISTING_STEPS.S02_SELECT_PARCEL) {
      _src = require('../../../images/map-step-02.png')
    } else if (_status === CREATE_LISTING_STEPS.S03_ADJUST_PARCEL) {
      _src = require('../../../images/map-step-03.png')
    } else {
      _src = require('../../../images/map-step-04.png')
    }
    return _src
  }

  return (
    <div
      className={styles.mapContainer}
      style={{
        backgroundImage: 'url(' + getMapImg() + ')'
      }}
      onClick={updateStatus.bind(this)}
    />
  )
}

const mapStateToProps = state => ({
  status: state.createListing.status
})

const mapDispatchToProps = {
  selectParcelsData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomMap)
