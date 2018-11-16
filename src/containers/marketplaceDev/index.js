import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../../components/Sidebar'
import FilterBar from '../marketplace/FilterBar/'
import List from './List/'
import Map from './Map/'
import styles from '../marketplace/index.module.scss'
import UserRole from '../../constants'
import { push } from 'connected-react-router'

const MarketplaceDev = props => (
  <div className={styles.marketplace}>
    <div className={styles.sidebarWrapper}>
      <Sidebar link="/marketplace/dev" isMarket />
    </div>

    <div className={styles.filterbarWrapper}>
      <FilterBar role={UserRole.Developer} />
    </div>

    <div className={styles.contentWrapper}>
      {props.content === 'list' ? (
        <List goToDetail={props.goToDetail} />
      ) : (
        <Map goToDetail={props.goToDetail} />
      )}
    </div>
  </div>
)

const mapStateToProps = state => ({
  content: state.marketplace.content
})

const mapDispatchToProps = {
  goToDetail: () => push('/detailListingDev')
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketplaceDev)
