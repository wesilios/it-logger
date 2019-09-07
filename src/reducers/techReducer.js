import {
  GET_TECHS,
  ADD_TECH,
  SET_LOADING,
  DELETE_TECH,
  TECHS_ERROR
} from '../actions/types';

const initialState = {
  techs: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(log => log.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
