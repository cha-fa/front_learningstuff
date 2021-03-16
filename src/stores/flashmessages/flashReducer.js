import {
  FLASH_ERROR,
  FLASH_INFO,
  FLASH_SUCCESS,
  FLASH_WARNING,
  FLASH_OUT,
} from "../actionTypes";

const initialState = {
  display: false,
  category: null,
  title: null,
  content: null,
};

const flashReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLASH_SUCCESS:
    case FLASH_WARNING:
    case FLASH_INFO:
    case FLASH_ERROR:
      return {
        ...state,
        display: true,
        category: action.category,
        title: action.title,
        content: action.content,
      };
    case FLASH_OUT:
      return {
        ...state,
        display: false,
        category: null,
        title: null,
        content: null,
      };
    default:
      return state;
  }
};

export default flashReducer;
