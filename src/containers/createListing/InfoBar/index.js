import React from 'react'
import { selectParcelsData } from '../../../modules/createListing'
import { connect } from 'react-redux'
import { CREATE_LISTING_STEPS } from '../../../constants'
import globalStyles from '../index.module.scss'
import styles from './index.module.scss'

const InfoBar = props => {
  /**
   * Move to next step
   */
  const updateStatus = () => {
    var _status = props.status
    if (_status === CREATE_LISTING_STEPS.S01_SHOW_MAP) {
      _status = CREATE_LISTING_STEPS.S02_SELECT_PARCEL
    } else if (_status === CREATE_LISTING_STEPS.S02_SELECT_PARCEL) {
      _status = CREATE_LISTING_STEPS.S03_ADJUST_PARCEL
    } else if (_status === CREATE_LISTING_STEPS.S03_ADJUST_PARCEL) {
      _status = CREATE_LISTING_STEPS.S04_CONFIRM_PARCEL
    }
    props.selectParcelsData({
      status: _status
    })
  }

  const InforRender = () => {
    var _status = props.status
    if (_status === CREATE_LISTING_STEPS.S01_SHOW_MAP) {
      return <p>Select the parcel(s) of land that is yours</p>
    } else if (_status === CREATE_LISTING_STEPS.S02_SELECT_PARCEL) {
      return (
        <p>
          <span>Select the parcel(s) of land that is yours</span>
          <button
            className={globalStyles.button + ' ' + globalStyles.buttonBlue}
            onClick={updateStatus.bind(this)}>
            Done
          </button>
        </p>
      )
    } else if (_status === CREATE_LISTING_STEPS.S03_ADJUST_PARCEL) {
      return (
        <p className={styles.fixWidth}>
          <span>
            Use the points to adjust and confirm portion of land you want to
            list
          </span>
          <button
            className={
              globalStyles.button + ' ' + globalStyles.buttonBlue + ' ml-2'
            }
            onClick={updateStatus.bind(this)}>
            Done
          </button>
          &nbsp;
          <button
            className={
              globalStyles.button + ' ' + globalStyles.buttonWhite + ' ml-2'
            }>
            Undo last point
          </button>
        </p>
      )
    } else {
      return null
    }
  }
  return (
    <div className={styles.informationWrapper}>
      <InforRender />
    </div>
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
)(InfoBar)
