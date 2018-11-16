import React from 'react'
import styles from './ServiceProviders.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const serviceProviderHeader = (
  <div className={styles.serviceProviderHeader}>
    <div className={styles.serviceType}>service type</div>
    <div className={styles.contractorName}>contractor name</div>
    <div className={styles.costEstimate}>cost estimate</div>
    <div className={styles.timeEstimate}>time estimate</div>
    <div className={styles.when}>when</div>
    <div className={styles.action}>action / status</div>
  </div>
)

const ServiceProviders = props => {
  const serviceProviderList = props.data.map((s, i, a) => (
    <li
      key={i}
      className={i === a.length - 1 ? styles.serviceProviderFooter : ''}>
      <div className={styles.serviceType}>{s.serviceType}</div>
      <div className={styles.contractorName}>{s.contractorName}</div>
      <div className={styles.costEstimate}>{s.costEstimate}</div>
      <div className={styles.timeEstimate}>{s.timeEstimate}</div>
      <div className={styles.when}>{s.when}</div>
      {s.action ? (
        <div className={styles.action}>
          {s.action}
          <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        </div>
      ) : (
        ''
      )}
      {s.status ? <div className={styles.status}>{s.status}</div> : ''}
    </li>
  ))

  return (
    <div className={styles.serviceProviders}>
      <h3>Service Providers</h3>
      <div className={styles.subTitle}>
        It is recommended you receive quotes and timelines for the following
        services to best calculate your overall project cost estimate.
      </div>
      {serviceProviderHeader}
      <ul>{serviceProviderList}</ul>
    </div>
  )
}

export default ServiceProviders
