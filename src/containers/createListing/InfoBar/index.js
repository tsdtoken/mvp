import React from 'react'
import { selectParcelsData } from '../../../modules/createListing'
import { connect } from 'react-redux'
import { CREATE_LISTING_STEPS } from '../../../constants'
import styles from './index.module.scss'

const InfoBar = props => {
  /**
   * Move to next step
   */
  const updateStatus = status => {
    props.selectParcelsData({
      status
    })
  }

  const InforRender = () => {
    var _status = props.status
    if (_status === CREATE_LISTING_STEPS.S01_SHOW_MAP) {
      return (
        <div>
          <p>Select the parcel(s) of land that is yours</p>
          <button
            onClick={updateStatus.bind(
              this,
              CREATE_LISTING_STEPS.S02_SELECT_PARCEL
            )}
            className={styles.primaryButton}>
            Next
          </button>
        </div>
      )
    } else if (_status === CREATE_LISTING_STEPS.S02_SELECT_PARCEL) {
      return (
        <div>
          <p>Select the parcel(s) of land that is yours</p>
          <button
            className={styles.primaryButton}
            onClick={updateStatus.bind(
              this,
              CREATE_LISTING_STEPS.S03_ADJUST_PARCEL
            )}>
            Next
          </button>
        </div>
      )
    } else if (_status === CREATE_LISTING_STEPS.S03_ADJUST_PARCEL) {
      return (
        <div>
          <p>
            Use the points to adjust and confirm portion of land you want to
            list
          </p>
          <button
            className={`${styles.primaryButton} mb-3`}
            onClick={updateStatus.bind(
              this,
              CREATE_LISTING_STEPS.S04_CONFIRM_PARCEL
            )}>
            Next
          </button>
          <button
            className={styles.secondaryButton}
            onClick={updateStatus.bind(
              this,
              CREATE_LISTING_STEPS.S01_SHOW_MAP
            )}>
            Cancel
          </button>
        </div>
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
