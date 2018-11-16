import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../../components/Sidebar'
import PageNav from './PageNav'
import SearchBox from './SearchBox'
import InfoBar from './InfoBar'
import CustomMap from './Map'
import InfoBox from './InfoBox'
import styles from './index.module.scss'
import { selectParcelsData } from '../../modules/createListing'

const resetState = props => {
  props.selectParcelsData({
    status: 'show_map'
  })
}

const CreateListing = props => (
  <div className={styles.createListing}>
    <div className={styles.sidebarWrapper}>
      <Sidebar
        link="/createListing"
        isCreate /*reset={() => {resetState(props)}}*/
      />
    </div>

    <div className={styles.contentWrapper}>
      <PageNav status={props.status} />
      <div className={styles.mapWrapper}>
        <SearchBox />
        <InfoBar status={props.status} />
        <CustomMap />
        <InfoBox
          reset={() => {
            resetState(props)
          }}
        />
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  status: state.createListing.status
})

const mapDispatchToProps = {
  selectParcelsData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateListing)
