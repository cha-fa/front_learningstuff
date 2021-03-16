import * as actionTypes from "../actionTypes";
import {
  AiOutlineWarning,
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineStop,
} from "react-icons/ai";

export const flashSuccess = (message) => {
  return {
    type: actionTypes.FLASH_SUCCESS,
    category: "success",
    title: <AiOutlineCheckCircle size={30} />,
    content: message,
  };
};

export const flashInfo = (message) => {
  return {
    type: actionTypes.FLASH_INFO,
    category: "info",
    title: <AiOutlineInfoCircle size={30} />,
    content: message,
  };
};

export const flashWarning = (message) => {
  return {
    type: actionTypes.FLASH_WARNING,
    category: "warning",
    title: <AiOutlineWarning size={30} />,
    content: message,
  };
};

export const flashError = (message) => {
  return {
    type: actionTypes.FLASH_ERROR,
    category: "danger",
    title: <AiOutlineStop size={30} />,
    content: message,
  };
};

export const removeFlash = () => {
  return {
    type: actionTypes.FLASH_OUT,
  };
};
