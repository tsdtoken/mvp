import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/HeaderDetail'
import OverviewDetail from '../../components/OverviewDetail'
import BidHistoryDetail from '../../components/BidHistoryDetail'
import SupportDocumentation from '../../components/SupportDocumentation'
import LandProfile from '../../components/LandProfile'
import FormPrepare from './FormPrepare/'
import styles from './index.module.scss'
import { push } from 'connected-react-router'
import image from '../../images/image.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'

const HeaderText = 'Balranald, Southern New South Wales'
const arrayText = [
  { text: 'auction details', isActive: true },
  { text: 'bid history', isActive: false },
  { text: 'land profile', isActive: false },
  { text: 'supporting documentation', isActive: false }
]

const landProfileData = {
  menu: [
    {
      name: 'sale info',
      active: true
    },
    {
      name: 'network opportunities',
      active: false
    },
    {
      name: 'renewable info',
      active: false
    }
  ],
  data: [
    {
      title: 'Land size',
      value: '1000 hectares'
    },
    {
      title: 'Irradiation',
      value: '18.574 kWh/m2',
      show: true
    },
    {
      title: 'Proximity to grid',
      value: '2km NE',
      hide: true
    },
    {
      title: 'Slope',
      value: '2% over every 1km',
      show: true
    },
    {
      title: 'Type of land',
      value: 'Farm'
    }
  ]
}

const DetailListing = props => (
  <div className={styles.detailListing}>
    <div className={styles.sidebarWrapper}>
      <Sidebar link="/detailListingLandOwner" isMarket />
    </div>

    <div className={styles.contentWrapper}>
      <div className={styles.contentInner}>
        <Header haveHeader={true} headerText={HeaderText} list={arrayText} />
        <OverviewDetail
          contentLeft={<FormPrepare goBack={props.goBack} />}
          images={[image, image2, image3, image4]}
        />
        <BidHistoryDetail />
        <LandProfile data={landProfileData} edit showHideRow />
        <SupportDocumentation editable={true} canDelete />
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  goBack: () => push('/marketplace')
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailListing)
