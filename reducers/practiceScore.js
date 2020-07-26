const practiceScoreReducer = (state = {score: 0, total: 0}, action) => {
  switch (action.type) {
    case 'RESET_PRACTICE_SCORE':
      state.score = 0;
      state.total = 0;
      return state;
    case 'INCREASE_PRACTICE_SCORE':
      state.score = state.score + 1;
      state.total = state.total + 1;
      return state;
    case 'DECREASE_PRACTICE_SCORE':
      state.score = state.score;
      state.total = state.total + 1;
      return state;
    default:
      return state;
  }
};

export default practiceScoreReducer;
