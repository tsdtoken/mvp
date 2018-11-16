import React from 'react'
import { connect } from 'react-redux'
import { selectParcelsData } from '../../../modules/createListing'
import { CREATE_LISTING_STEPS } from '../../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faFileAlt,
  faPlusSquare
} from '@fortawesome/free-solid-svg-icons'
import globalStyles from '../index.module.scss'
import styles from './index.module.scss'
import upload01 from '../../../images/upload01.png'
import upload02 from '../../../images/upload02.png'
import upload03 from '../../../images/upload03.png'
import upload04 from '../../../images/upload04.png'
/**
 *
 * Initial status CREATE_LISTING_STEPS.S06_PHOTO_PARCEL
 */

const PhotoBox = props => {
  const updateStatus = status => {
    props.selectParcelsData({
      status: status
    })
  }

  return (
    <div className={styles.infoboxWrapper}>
      <h3>Add photos</h3>
      <div className="lst-images mb-3 clearfix">
        <div className={styles.row + ' clearfix'}>
          <div className={styles.col}>
            <img className={styles.uploadImg} src={upload01} alt="Uploaded" />
            <span className={styles.trashIcon}>
              <FontAwesomeIcon icon={faTrash} fixedWidth />
            </span>
          </div>
          <div className={styles.col}>
            <img className={styles.uploadImg} src={upload02} alt="Uploaded" />
            <span className={styles.trashIcon}>
              <FontAwesomeIcon icon={faTrash} fixedWidth />
            </span>
          </div>
          <div className={styles.col}>
            <img className={styles.uploadImg} src={upload03} alt="Uploaded" />
            <span className={styles.trashIcon}>
              <FontAwesomeIcon icon={faTrash} fixedWidth />
            </span>
          </div>
          <div className={styles.col}>
            <img className={styles.uploadImg} src={upload04} alt="Uploaded" />
            <span className={styles.trashIcon}>
              <FontAwesomeIcon icon={faTrash} fixedWidth />
            </span>
          </div>
        </div>
        <div className={styles.row + ' clearfix'}>
          <div className={styles.col + ' ' + styles.uploadCell}>
            <span className={styles.uploadImg}>
              <FontAwesomeIcon icon={faPlusSquare} fixedWidth />
            </span>
            <input type="file" />
          </div>
        </div>
      </div>
      <div className="btn-upload mb-3">
        <h3>Upload land valuation report (required)</h3>
        <div className={styles.uploadWrapper}>
          <div className={styles.uploadBtn}>
            <span className={styles.fileIcon}>
              <FontAwesomeIcon icon={faFileAlt} fixedWidth />
            </span>
            <span>Land valuation report (1.2mb)</span>
            <span className={styles.trashIcon}>
              <FontAwesomeIcon icon={faTrash} fixedWidth />
            </span>
          </div>
        </div>
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
            CREATE_LISTING_STEPS.S07_LISTING_OPTIONS
          )}>
          Next
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
            CREATE_LISTING_STEPS.S05_DESCRIBE_PARCEL
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
)(PhotoBox)
