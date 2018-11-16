import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/HeaderDetail'
import OverviewDetail from '../../components/OverviewDetail'
import SupportDocumentation from '../../components/SupportDocumentation'
import LandProfile from '../../components/LandProfile'
import DeveloperProfile from '../../components/DeveloperProfile'
import CheckList from '../../components/CheckList'
import ServiceProviders from '../../components/ServiceProviders'
import FormPrepare from './FormPrepare/'
import FormFinish from './FormFinish/'
import image from '../../images/image.png'
import styles from './index.module.scss'

const beforeBidData = [
  {
    serviceType: 'Architect',
    contractorName: 'None',
    costEstimate: 'N/A',
    timeEstimate: 'N/A',
    when: 'N/A',
    action: 'Advertise on marketplace'
  },
  {
    serviceType: 'Lawyer',
    contractorName: 'None',
    costEstimate: 'N/A',
    timeEstimate: 'N/A',
    when: 'N/A',
    action: 'Advertise on marketplace'
  },
  {
    serviceType: 'Accountant',
    contractorName: 'None',
    costEstimate: 'N/A',
    timeEstimate: 'N/A',
    when: 'N/A',
    status: 'Advertised'
  },
  {
    serviceType: 'Surveyor',
    contractorName: '3 quotes',
    costEstimate: '$9,000 ~ $13,000',
    timeEstimate: '2 ~ 3 weeks',
    when: 'Immediate ~ 1 week',
    action: 'See quotes'
  },
  {
    serviceType: 'Total Costs',
    contractorName: '$9,000 ~ $13,000',
    costEstimate: 'N/A',
    timeEstimate: 'N/A',
    when: 'N/A',
    action: 'Update financial model'
  }
]
const afterBidData = [
  {
    serviceType: 'Architect',
    contractorName: 'None',
    costEstimate: 'N/A',
    timeEstimate: 'N/A',
    when: 'N/A',
    action: 'Advertise on marketplace'
  },
  {
    serviceType: 'Lawyer',
    contractorName: 'None',
    costEstimate: 'N/A',
    timeEstimate: 'N/A',
    when: 'N/A',
    action: 'Advertise on marketplace'
  },
  {
    serviceType: 'Accountant',
    contractorName: 'None',
    costEstimate: 'N/A',
    timeEstimate: 'N/A',
    when: 'N/A',
    status: 'Advertised'
  },
  {
    serviceType: 'Surveyor',
    contractorName: 'Frank’s Surveying',
    costEstimate: '$9,000',
    timeEstimate: '2 ~ 3 weeks',
    when: '11/11/2018',
    action: 'See contractors’ profile'
  },
  {
    serviceType: 'Total Costs',
    contractorName: '$9,000 ~ $13,000',
    costEstimate: 'N/A',
    timeEstimate: 'N/A',
    when: 'N/A',
    action: 'Update financial model'
  }
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

class DetailListing extends React.Component {
  constructor() {
    super()

    this.state = {
      bid: false,
      headerText: 'Balranald, Southern New South Wales',
      prepareHeader: [
        { text: 'auction details', isActive: true },
        { text: 'bid history', isActive: false },
        { text: 'land profile', isActive: false },
        { text: 'supporting documentation', isActive: false }
      ],
      finishHeader: [
        { text: 'auction details', isActive: true },
        { text: 'checklist (2)', isActive: false },
        { text: 'service providers', isActive: false },
        { text: 'developer profile', isActive: false },
        { text: 'land profile', isActive: false },
        { text: 'supporting documentation', isActive: false }
      ],
      serviceProvidersData: beforeBidData
    }
  }

  bid = () => {
    this.setState({
      bid: true,
      serviceProvidersData: afterBidData
    })
  }

  render() {
    return (
      <div className={styles.detailListing}>
        <div className={styles.sidebarWrapper}>
          <Sidebar link="/detailListingDev" isMarket />
        </div>

        <div className={styles.contentWrapper}>
          <Header
            haveHeader
            headerText={this.state.headerText}
            list={
              this.state.bid
                ? this.state.finishHeader
                : this.state.prepareHeader
            }
          />
          <OverviewDetail
            contentLeft={
              this.state.bid ? <FormFinish /> : <FormPrepare bid={this.bid} />
            }
            images={[image, image]}
          />
          {this.state.bid && <CheckList />}
          <ServiceProviders data={this.state.serviceProvidersData} />
          {this.state.bid && (
            <DeveloperProfile data={developerProfileData} edit />
          )}
          <LandProfile data={landProfileData} />
          <SupportDocumentation editable={true} />
        </div>
      </div>
    )
  }
}

export default DetailListing
