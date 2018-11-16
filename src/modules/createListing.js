// Constants
export const SELECT_PARCELS = 'createListing/SELECT_PARCELS'

// Actions
export const selectParcelsData = payload => ({
  type: SELECT_PARCELS,
  payload
})

// Thunks

// Action handlers
const ACTION_HANDLERS = {
  [SELECT_PARCELS]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  }
}

// Reducer
const initialState = {
  status: 'show_map' // CREATE_LISTING_STEPS.S01_SHOW_MAP
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
