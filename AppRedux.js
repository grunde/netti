// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD_INCOME_SOURCE: 'ADD_INCOME_SOURCE',
  REMOVE_INCOME_SOURCE: 'REMOVE_INCOME_SOURCE',
};

export const actionCreators = {
  addIncomeSource: (incomeSource) => {
    return {type: types.ADD_INCOME_SOURCE, payload: incomeSource}
  },
  removeIncomeSource: (id) => {
  	return {type: types.REMOVE_INCOME_SOURCE, payload: id};
  }
};

const initialState = {
	incomeSources: [],
};

export const reducer = (state = initialState, action) => {
	const {incomeSources} = state;
	const {type, payload} = action;

	switch (type) {
    case types.ADD_INCOME_SOURCE: {
      return {
        ...state,
        incomeSources: [payload, ...incomeSources]
      }
    }
    case types.REMOVE_INCOME_SOURCE: {
      return {
        ...state,
        incomeSources: incomeSources.filter((incomeSource, i) => i !== payload),
      }
    }
  }

  return state;
}
