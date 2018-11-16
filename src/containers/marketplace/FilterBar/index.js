import React from 'react'
import { updateMarketplaceData } from '../../../modules/marketplace'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobeAsia,
  faListUl,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import Toggle from '../../../components/Toggle'
import styles from './FilterBar.module.scss'
import UserRole from '../../../constants'

const FilterBar = props => {
  const changeContent = (content, e) => {
    e.preventDefault()
    props.updateMarketplaceData({
      content
    })
  }

  return (
    <div className={styles.filterBar}>
      <div className={styles.header}>
        <div
          className={
            styles.contentSwitch +
            ' ' +
            (props.content === 'map' ? styles.activeContent : '')
          }
          onClick={changeContent.bind(this, 'map')}>
          <FontAwesomeIcon icon={faGlobeAsia} />
        </div>
        <div
          className={
            styles.contentSwitch +
            ' ' +
            (props.content === 'list' ? styles.activeContent : '')
          }
          onClick={changeContent.bind(this, 'list')}>
          <FontAwesomeIcon icon={faListUl} />
        </div>
      </div>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          placeholder="Search for location"
        />
        <div className={styles.searchIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div>
        <div className={styles.filterBy}>FILTER BY:</div>

        {props.role === UserRole.Investor && (
          <Toggle title="Fundraising" nestedToggles>
            <Toggle title="FUNDING GOALS" subTitle="All">
              ...
            </Toggle>

            <Toggle title="AMOUNT RAISED" subTitle="$1,000,000 to $20,000,00">
              <div className="row">
                <div className="col-6">
                  <span className={styles.amountLabel}>FROM</span>
                  <input className={styles.amountInput} value="$1,000,000" />
                </div>
                <div className="col-6">
                  <span className={styles.amountLabel}>TO</span>
                  <input className={styles.amountInput} value="$2,000,000" />
                </div>
              </div>
            </Toggle>

            <Toggle title="TIME LEFT" subTitle="All">
              ...
            </Toggle>
          </Toggle>
        )}

        {props.role === UserRole.Developer && (
          <Toggle title="Auction" nestedToggles>
            <Toggle title="AUCTION DURATION" subTitle="All">
              ...
            </Toggle>

            <Toggle title="RESERVE PRICE" subTitle="$1,000,000 to $20,000,00">
              <div className="row">
                <div className="col-6">
                  <span className={styles.amountLabel}>FROM</span>
                  <input
                    className={styles.amountInput}
                    value="$1,000,000"
                    readOnly
                  />
                </div>
                <div className="col-6">
                  <span className={styles.amountLabel}>TO</span>
                  <input
                    className={styles.amountInput}
                    value="$2,000,000"
                    readOnly
                  />
                </div>
              </div>
            </Toggle>

            <Toggle title="LAND SALE PRICE" subTitle="All">
              ...
            </Toggle>
          </Toggle>
        )}

        <Toggle title="By Project" nestedToggles>
          <Toggle title="STAGE OF PROJECT" subTitle="All">
            ...
          </Toggle>

          <Toggle title="SIZE OF LAND" subTitle="All">
            ...
          </Toggle>

          <Toggle title="TYPE OF LAND" subTitle="All">
            ...
          </Toggle>

          <Toggle title="MW OF ENERGY PRODUCED" subTitle="All">
            ...
          </Toggle>

          <Toggle title="BUILD TIME" subTitle="All">
            ...
          </Toggle>
        </Toggle>
        {props.role === UserRole.Developer && (
          <React.Fragment>
            <Toggle title="Network Opportunities">...</Toggle>
            <Toggle title="Solar">...</Toggle>
            <Toggle title="Wind">...</Toggle>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  content: state.marketplace.content
})

const mapDispatchToProps = {
  updateMarketplaceData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar)
