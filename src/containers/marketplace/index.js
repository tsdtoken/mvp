import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../../components/Sidebar'
import FilterBar from './FilterBar/'
import List from './List/'
import Map from './Map/'
import styles from './index.module.scss'
import UserRole from '../../constants'
import { push } from 'connected-react-router'

const Marketplace = props => (
  <div className={styles.marketplace}>
    <div className={styles.sidebarWrapper}>
      <Sidebar link="/marketplace" isMarket />
    </div>

    <div className={styles.filterbarWrapper}>
      <FilterBar role={UserRole.Investor} />
    </div>

    <div className={styles.contentWrapper}>
      {props.content === 'list' ? (
        <List
          goToDetailLandOwner={props.goToDetailLandOwner}
          goToDetailInvestor={props.goToDetailInvestor}
        />
      ) : (
        <Map
          goToDetailLandOwner={props.goToDetailLandOwner}
          goToDetailInvestor={props.goToDetailInvestor}
        />
      )}
    </div>
  </div>
)

const mapStateToProps = state => ({
  content: state.marketplace.content
})

const mapDispatchToProps = {
  goToDetailLandOwner: () => push('/detailListingLandOwner'),
  goToDetailInvestor: () => push('/detailListingInvestor')
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Marketplace)
