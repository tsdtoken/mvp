import React from 'react'
import { connect } from 'react-redux'
import { selectParcelsData } from '../../../modules/createListing'
import { CREATE_LISTING_STEPS } from '../../../constants'
import globalStyles from '../index.module.scss'
import styles from './index.module.scss'

/**
 *
 * Initial status CREATE_LISTING_STEPS.S05_DESCRIBE_PARCEL
 */
const DescBox = props => {
  const updateStatus = status => {
    props.selectParcelsData({
      status: status
    })
  }

  return (
    <div className={styles.infoboxWrapper}>
      <h3>Please provide a description of your land:</h3>
      <div className="mb-3">
        <textarea placeholder="Add a description..." rows="10" cols="40" />
      </div>
      <div className="mb-3">
        <button
          className={
            globalStyles.button +
            ' ' +
            globalStyles.buttonBlue +
            ' ' +
            globalStyles.full
          }
          onClick={updateStatus.bind(
            this,
            CREATE_LISTING_STEPS.S06_PHOTO_PARCEL
          )}>
          Confirm
        </button>
      </div>
      <div className="mb-3">
        <button
          className={
            globalStyles.button +
            ' ' +
            globalStyles.buttonWhite +
            ' ' +
            globalStyles.full
          }
          onClick={updateStatus.bind(
            this,
            CREATE_LISTING_STEPS.S04_CONFIRM_PARCEL
          )}>
          Back
        </button>
      </div>
      <div className="mb-3">
        <button
          className={
            globalStyles.button +
            ' ' +
            globalStyles.buttonLink +
            ' ' +
            globalStyles.full
          }
          onClick={updateStatus.bind(this, CREATE_LISTING_STEPS.S01_SHOW_MAP)}>
          CANCEL
        </button>
      </div>
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
)(DescBox)
