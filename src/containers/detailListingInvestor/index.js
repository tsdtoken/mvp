import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/HeaderDetail'
import OverviewDetail from '../../components/OverviewDetail'
import SupportDocumentation from '../../components/SupportDocumentation'
import DeveloperProfile from '../../components/DeveloperProfile'
import LandProfile from '../../components/LandProfile'
import FormPrepare from './FormPrepare/'
import image from '../../images/image3.png'
import styles from './index.module.scss'

const HeaderText = 'Barmedman, Southern New South Wales'
const arrayText = [
  { text: 'listing details', isActive: true },
  { text: 'developer profile', isActive: false },
  { text: 'land profile', isActive: false },
  { text: 'supporting documentation', isActive: false }
]

const developerProfileData = {
  menu: [
    {
      name: 'key facts',
      active: true
    },
    {
      name: 'highlights',
      active: false
    }
  ],
  data: [
    {
      title: 'Founded',
      value: '2001'
    },
    {
      title: 'Employees',
      value: '5 ~ 10'
    },
    {
      title: 'Projects developed',
      value: '3'
    },
    {
      title: 'CEO',
      value: 'Charles Barkley'
    },
    {
      title: 'Annual revenue',
      value: '$4 ~ 8m'
    }
  ]
}

const landProfileData = {
  menu: [
    {
      name: 'sale info',
      active: true
    },
    {
      name: 'land info',
      active: false
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
      title: 'Asking price',
      value: '$1,000,000'
    },
    {
      title: 'Reserve',
      value: '$100,000'
    },
    {
      title: 'Token / Cash payout',
      value: '5% / $950,000 Until Phase 5'
    },
    {
      title: 'Fundrasing end',
      value: '3 months after auction win'
    }
  ]
}

const DetailListing = props => (
  <div className={styles.detailListing}>
    <div className={styles.sidebarWrapper}>
      <Sidebar link="/detailListingInvestor" isMarket />
    </div>

    <div className={styles.contentWrapper}>
      <Header haveHeader={true} headerText={HeaderText} list={arrayText} />
      <OverviewDetail contentLeft={<FormPrepare />} images={[image, image]} />
      <DeveloperProfile data={developerProfileData} />
      <LandProfile data={landProfileData} />
      <SupportDocumentation editable={false} />
    </div>
  </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailListing)
