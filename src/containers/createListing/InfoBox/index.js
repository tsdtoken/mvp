import React from 'react'
import { connect } from 'react-redux'
import { selectParcelsData } from '../../../modules/createListing'
import { CREATE_LISTING_STEPS } from '../../../constants'
import ConfirmBox from './ConfirmBox'
import PhotoBox from './PhotoBox'
import DescBox from './DescBox'
import ListingOptions from '../../../components/ListingOptions'
import { push } from 'connected-react-router'

const InfoBox = props => {
  const updateStatus = status => {
    props.selectParcelsData({
      status: status
    })
  }

  const InfoBoxRender = () => {
    var _status = props.status
    if (_status === CREATE_LISTING_STEPS.S04_CONFIRM_PARCEL) {
      return <ConfirmBox />
    } else if (_status === CREATE_LISTING_STEPS.S05_DESCRIBE_PARCEL) {
      return <DescBox />
    } else if (_status === CREATE_LISTING_STEPS.S06_PHOTO_PARCEL) {
      return <PhotoBox />
    } else if (_status === CREATE_LISTING_STEPS.S07_LISTING_OPTIONS) {
      return (
        <ListingOptions
          onBack={updateStatus.bind(
            this,
            CREATE_LISTING_STEPS.S06_PHOTO_PARCEL
          )}
          onCancel={updateStatus.bind(this, CREATE_LISTING_STEPS.S01_SHOW_MAP)}
          onAgree={props.goExit}
          reset={props.reset}
        />
      )
    } else {
      return null
    }
  }

  return <InfoBoxRender />
}

const mapStateToProps = state => ({
  status: state.createListing.status
})

const mapDispatchToProps = {
  selectParcelsData,
  goExit: () => push('/exit')
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoBox)
