import React from 'react'
import styles from './ListingOptions.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Slider from 'rc-slider'
import 'react-dates/initialize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { DateRangePicker, SingleDatePicker } from 'react-dates'
import moment from 'moment'

class ListingOptions extends React.Component {
  constructor() {
    super()

    this.state = {
      token: 0,
      risk: 0,
      salePrice: '$1000000',
      reversePrice: '$100000',

      startDate: moment(new Date('2018-11-11')),
      endDate: moment(new Date('2018-12-13')),
      date: moment(new Date('2019-03-31')),

      tokenOptions: [
        'Phase 1 - Origination',
        'Phase 2 - Planning',
        'Phase 3 - Funding',
        'Phase 4 - Construction',
        'Phase 5 - Operations'
      ]
    }
  }

  /*
    function convert number to string with commas. Ex: 1000 => 1,000
  */

  numberWithCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  /*
    handle when change sale price, reverse price will also change and equal 10% of sale price
  */

  handleChangeValue = event => {
    let value = this.getNumberAndConcat(event.target.value)
    this.setState({
      salePrice: '$' + value,
      reversePrice: '$' + value / 10
    })
  }

  /*
    function get number from input field ( include $ ) and convert it to number after removing all letters that aren't number
  */

  getNumberAndConcat = value => {
    if (value) {
      value = value.match(/[0-9]/g)
      if (value) {
        value = value.reduce((acc, cur) => acc.concat(cur))
        value = value.replace(/^0+/, '')
      } else {
        return 0
      }
      return value
    }
    return 0
  }

  /*
    handle when change slide, there will be 3 states: 0, 50 and 100
    detail is
    risk  : 0 ( less risk ) => token : 0
    risk  : 50 ( medium risk) => token : 30
    risk  : 100 (high risk ) => token : 70
  */

  changeSlide = num => {
    if (num < 50) {
      this.setState({
        ...this.state,
        token: 0
      })
    } else if (num > 50) {
      this.setState({
        ...this.state,
        token: 70
      })
    } else {
      this.setState({
        ...this.state,
        token: 30
      })
    }
  }

  render() {
    return (
      <div className={styles.listingOptions}>
        <h3 className={styles.header}>Listing options</h3>
        <Tabs>
          <TabList className={styles.tabList}>
            <Tab
              className={styles.tab}
              selectedClassName={styles.tabSelected}
              disabledClassName={styles.tabDisabled}>
              I want to sell
            </Tab>
            <Tab
              className={styles.tab}
              selectedClassName={styles.tabSelected}
              disabledClassName={styles.tabDisabled}
              disabled={true}>
              I want to lease
            </Tab>
          </TabList>

          <TabPanel className={styles.tabPanel}>
            <div className="row px-3">
              <div className="col-6">
                <span className={styles.amountLabel}>Sale Price</span>
                <input
                  className={styles.amountInput}
                  value={this.state.salePrice}
                  onChange={this.handleChangeValue}
                />
                <div className={styles.ammountInstruct}>
                  This is the total price that the land will be sold for
                  (recommended)
                </div>
              </div>
              <div className="col-6">
                <span className={styles.amountLabel}>Reserve Price</span>
                <input
                  className={styles.amountInput}
                  value={this.state.reversePrice}
                  onChange={event => {
                    this.setState({
                      reversePrice:
                        '$' + this.getNumberAndConcat(event.target.value)
                    })
                  }}
                />
                <div className={styles.ammountInstruct}>
                  10% of sale price, non-refundable once deposited (recommended)
                </div>
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12">
                <div className={styles.label}>token / cash payout</div>
                <Slider
                  value={this.state.token}
                  className={styles.slider}
                  trackStyle={{
                    backgroundColor: '#FFBB32',
                    height: 20,
                    borderRadius: '10px'
                  }}
                  handleStyle={{
                    background: '#FFFFFF',
                    border: '1px solid #C0C2CC',
                    width: 24,
                    height: 24,
                    marginLeft: -12,
                    marginTop: -2
                  }}
                  railStyle={{
                    background: '#2B2F7C',
                    height: 20,
                    borderRadius: '10px'
                  }}
                  onChange={token => {
                    this.setState({ token })
                  }}
                />
                <div className={styles.sliderIntructor}>
                  <div className={styles.intructorContent}>
                    {this.state.token +
                      '% tokens $' +
                      this.numberWithCommas(
                        (this.getNumberAndConcat(this.state.salePrice) *
                          this.state.token) /
                          100
                      )}
                  </div>
                  <div className={styles.intructorContent}>
                    {100 -
                      this.state.token +
                      '% cash $' +
                      this.numberWithCommas(
                        (this.getNumberAndConcat(this.state.salePrice) *
                          (100 - this.state.token)) /
                          100
                      )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12">
                <div className={styles.label}>
                  your token stake to be released at
                </div>
                <div className={styles.selectWrapper}>
                  <select className={styles.tokenSelect}>
                    {this.state.tokenOptions.map((item, key) => (
                      <option key={key}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.ammountInstruct}>
                  How long you can hold your token stake for before it is
                  available to be sold in market. Holding it longer potentially
                  increases its value over time.
                </div>
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12">
                <div className={styles.label}>
                  list my land for auction between
                </div>
                <div
                  className={`${styles.datePickerWrapper} custom-date-picker`}>
                  <DateRangePicker
                    horizontalMargin={50}
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) =>
                      this.setState({ startDate, endDate })
                    } // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput =>
                      this.setState({ focusedInput })
                    } // PropTypes.func.isRequired,
                    customArrowIcon="to"
                    displayFormat="DD/MM/YYYY"
                  />
                  <FontAwesomeIcon
                    className={styles.datePickerIcon}
                    icon={faCalendarAlt}
                  />
                  <div className={styles.datePickerRange}>3 weeks, 2 days</div>
                </div>
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12">
                <div className={styles.label}>
                  target date for fundraising to end
                </div>
                <div
                  className={`${styles.datePickerWrapper} custom-date-picker`}>
                  <SingleDatePicker
                    horizontalMargin={50}
                    date={this.state.date} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="your_unique_id" // PropTypes.string.isRequired,
                    displayFormat="DD/MM/YYYY"
                  />
                  <FontAwesomeIcon
                    className={styles.datePickerIcon}
                    icon={faCalendarAlt}
                  />
                  <div className={styles.datePickerRange}>
                    3 months, 2 weeks from auction win
                  </div>
                </div>
                <div className={styles.ammountInstruct}>
                  Set the target date for the fundraising period to end (if sale
                  price is not reached). If the sale price cannot be reached by
                  the deadline, the listing is nullified.
                </div>
              </div>
            </div>
            <div className="row">
              <div className={styles.riskSlider + ' col-12'}>
                <div className={styles.label}>
                  risk slider (recommended setting)
                </div>
                <Slider
                  step={50}
                  onAfterChange={num => this.changeSlide(num)}
                  className={styles.slider}
                  trackStyle={{
                    backgroundColor: '#FFBB32',
                    height: 20,
                    borderRadius: '10px'
                  }}
                  handleStyle={{
                    background: '#FFFFFF',
                    border: '1px solid #C0C2CC',
                    width: 24,
                    height: 24,
                    marginLeft: -12,
                    marginTop: -2
                  }}
                  railStyle={{
                    background: '#2B2F7C',
                    height: 20,
                    borderRadius: '10px'
                  }}
                  onChange={() => {}}
                />
                <div className={styles.sliderIntructor}>
                  <div className={styles.intructorContent}>
                    Less risk
                    {'\n'}
                    Lower gain
                  </div>
                  <div className={styles.intructorContent}>
                    More risk
                    {'\n'}
                    Higher gain
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12 pt-2">
                <button
                  className={styles.agreeButton}
                  onClick={() => {
                    this.props.onAgree()
                    this.props.reset()
                  }}>
                  List it on the marketplace
                </button>
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12">
                <button
                  className={styles.declineButton}
                  onClick={this.props.onBack}>
                  Back
                </button>
              </div>
            </div>
            <div className="row px-3">
              <div className="col-12">
                <button
                  className={styles.noOutLineButton}
                  onClick={this.props.onCancel}>
                  cancel
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel />
        </Tabs>
      </div>
    )
  }
}

export default ListingOptions
