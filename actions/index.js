export const increment = x => {
  return {
    type: 'INCREMENT',
    payload: x,
  };
};

export const authLogin = (token, user) => {
  return {
    type: 'LOG_IN',
    payload: {
      token: token,
      user: user,
    },
  };
};

export const authLogout = () => {
  return {
    type: 'LOG_OUT',
  };
};

export const decrement = x => {
  return {
    type: 'DECREMENT',
    payload: x,
  };
};

export const ResetPracticeScore = () => {
  return {
    type: 'RESET_PRACTICE_SCORE',
  };
};

export const IncreasePracticeScore = () => {
  return {
    type: 'INCREASE_PRACTICE_SCORE',
  };
};

export const DecreasePracticeScore = () => {
  return {
    type: 'DECREASE_PRACTICE_SCORE',
  };
};
