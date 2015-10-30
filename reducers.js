const initialState = {
  fact: 'Enjoy these facts about Rob'
};

function robFacts(state = initialState, action) {
  switch (action.type) {
    case 'SET_FACT':
      return Object.assign({}, state, { fact: action.fact });

    default:
      return state;
  }
}

export default robFacts;
