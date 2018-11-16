// Constants
export const UPDATE_MARKETPLACE_DATA = 'marketplace/UPDATE_MARKETPLACE_DATA'

// Actions
export const updateMarketplaceData = payload => ({
  type: UPDATE_MARKETPLACE_DATA,
  payload
})

// Thunks

// Action handlers
const ACTION_HANDLERS = {
  [UPDATE_MARKETPLACE_DATA]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  }
}

// Reducer
const initialState = {
  content: 'list' // 'list' or 'map'
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
