import React from 'react'
import styles from './CheckList.module.scss'

const mockData = [
  {
    item: 'Add an introduction about your development company',
    importance: 'High',
    status: 'Done'
  },
  {
    item: 'Add at least 2 team bio with photos',
    importance: 'Med-High',
    status: 'Done'
  },
  {
    item: 'Finalise financial model (stage 1) from service provider quotes',
    importance: 'High',
    status: 'Not Done'
  }
]

const checkList = mockData.map((s, i, a) => (
  <li key={i} className={i === a.length - 1 ? styles.lastRow : ''}>
    <div className={styles.item}>{s.item}</div>
    <div
      className={
        styles.importance +
        ' ' +
        (s.importance === 'High' ? styles.redAlert : '')
      }>
      {s.importance}
    </div>
    <div
      className={
        styles.status + ' ' + (s.status !== 'Done' ? styles.redAlert : '')
      }>
      {s.status}
    </div>
  </li>
))

const checkListHeader = (
  <div className={styles.checkListHeader}>
    <div className={styles.item}>item</div>
    <div className={styles.importance}>importance</div>
    <div className={styles.status}>actions / status</div>
  </div>
)

const CheckList = () => (
  <div className={styles.checkList}>
    <h3>Checklist (2)</h3>
    <div className={styles.subTitle}>
      It is recommended you receive quotes and timelines for the following
      services to best calculate your overall project cost estimate.
    </div>
    {checkListHeader}
    <ul>{checkList}</ul>
  </div>
)

export default CheckList
