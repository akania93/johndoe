export const discographies = (state = [], action) => {
  switch (action.type) {
    default:
      return state

  }
};

export const concerts = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
};

export const compositions = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_COMPOSITIONS_SUCCESS':
      return [
        ...state, ...action.compositions
      ]
    default:
      return state
  }
};

export const showModal = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPOSITION_MODAL':
      return (!action.showModal)
    default:
      return state
  }
};