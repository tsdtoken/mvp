import { combineReducers } from 'redux'
import marketplace from './marketplace'
import createListing from './createListing'

export default combineReducers({
  marketplace,
  createListing
})
