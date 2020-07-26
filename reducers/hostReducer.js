/** @format */

const HostReducer = (state = 'https://ace-backend.herokuapp.com/', action) => {
  switch (action.type) {
    case 'CHANGE_HOST':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default HostReducer;
