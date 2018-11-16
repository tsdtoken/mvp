import React from 'react'
import styles from './SupportDocumentation.module.scss'
import {
  faFileExcel,
  faFileAlt,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SupportDocumentation = props => (
  <div className={styles.supportDocumentation}>
    <div className={styles.header}>
      <div className={styles.headerText}>Support Documentation</div>
      {props.editable && <button className={styles.upload}>Upload</button>}
    </div>
    <div className={styles.contentWrapper}>
      <div className={styles.listWrapper}>
        <div>
          <FontAwesomeIcon icon={faFileExcel} className={styles.cardIcon} />
          <span
            className={
              styles.filename + ' ' + (props.canDelete ? styles.blueText : '')
            }>
            Financial model (1.2mb)
          </span>
        </div>
        <div>
          <span className={styles.uploadBy}>
            Updated {!props.canDelete ? 'by Landowner' : ''} on 12/12/2018
          </span>
          {props.canDelete && (
            <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} />
          )}
        </div>
      </div>
      <div className={styles.listWrapper}>
        <div>
          <FontAwesomeIcon icon={faFileAlt} className={styles.cardIcon} />
          <span
            className={
              styles.filename + ' ' + (props.canDelete ? styles.blueText : '')
            }>
            Land valuation report (1.2mb)
          </span>
        </div>
        <div>
          <span className={styles.uploadBy}>
            Updated {!props.canDelete ? 'by Landowner' : ''} on 12/12/2018
          </span>
          {props.canDelete && (
            <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} />
          )}
        </div>
      </div>
    </div>
  </div>
)

export default SupportDocumentation
