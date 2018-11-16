import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styles from './ProfileTable.module.scss'

const ProfileTable = props => {
  const getShowHideIcon = item => {
    let text = item.show ? 'Show' : item.hide ? 'Hide' : ''
    let icon = item.show ? faEye : item.hide ? faEyeSlash : ''

    return (
      <span className={styles.iconWrapper}>
        {text} {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
      </span>
    )
  }

  return (
    <div>
      <div className={`${styles.listWrapper} mb-3`}>
        {props.data.menu.map((item, key) => (
          <div
            key={key}
            className={`${styles.listContent} ${
              item.active ? styles.active : ''
            }`}>
            <div className={styles.textContent}>{item.name}</div>
            <div className={styles.line} />
          </div>
        ))}
      </div>

      <table className={`table ${styles.mainTable}`}>
        <tbody>
          {props.data.data.map((item, key) => (
            <tr key={key}>
              <td className={styles.rowTitle}>{item.title}</td>
              <td>{item.value}</td>
              {props.showHideRow && (
                <td className={styles.showHideRow}>{getShowHideIcon(item)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfileTable
