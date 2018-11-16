import React from 'react'
import { connect } from 'react-redux'
import { selectParcelsData } from '../../../modules/createListing'
import { CREATE_LISTING_STEPS } from '../../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import globalStyles from '../index.module.scss'
import styles from './index.module.scss'

/**
 *
 * Initial status CREATE_LISTING_STEPS.S04_CONFIRM_PARCEL
 */
const ConfirmBox = props => {
  const updateStatus = status => {
    props.selectParcelsData({
      status: status
    })
  }

  return (
    <div className={styles.infoboxWrapper}>
      <h3>Confirm your land profile</h3>
      <div className="row border-bottom border-top mb-3 pt-2">
        <div className={'col-4 ' + styles.title}>Land size</div>
        <div className="col-5">1000 hectares</div>
        <div className="col-3">&nbsp;</div>
      </div>
      <div className="row border-bottom mb-3">
        <div className={'col-4 ' + styles.title}>Irradiation</div>
        <div className="col-5">
          18.574 kWh/m
          <sup>2</sup>
        </div>
        <div className="col-3">
          <div className={styles.toggleIcon}>
            <div className={styles.textIcon}>Show</div>
            <FontAwesomeIcon icon={faEye} fixedWidth />
          </div>
        </div>
      </div>
      <div className="row border-bottom mb-3">
        <div className={'col-4 ' + styles.title}>Proximity to grid</div>
        <div className="col-5">2km NE</div>
        <div className="col-3">
          <div className={styles.toggleIcon}>
            <div className={styles.textIcon}>Hide</div>
            <FontAwesomeIcon icon={faEyeSlash} fixedWidth />
          </div>
        </div>
      </div>
      <div className="row border-bottom mb-3">
        <div className={'col-4 ' + styles.title}>Slope</div>
        <div className="col-5">2% over every 1km</div>
        <div className="col-3">
          <div className={styles.toggleIcon}>
            <div className={styles.textIcon}>Show</div>
            <FontAwesomeIcon icon={faEye} fixedWidth />
          </div>
        </div>
      </div>
      <div className="row border-bottom mb-3">
        <div className={'col-4 ' + styles.title}>Type of land</div>
        <div className="col-5">Farm</div>
        <div className="col-3">&nbsp;</div>
      </div>
      <div className="row mb-3">
        <div className="col">
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
              CREATE_LISTING_STEPS.S05_DESCRIBE_PARCEL
            )}>
            Confirm
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
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
              CREATE_LISTING_STEPS.S03_ADJUST_PARCEL
            )}>
            Re-draw points
          </button>
        </div>
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
)(ConfirmBox)
