import * as flashActions from "./flashActions";

export const displaySuccess = (message) => {
  return (dispatch) => {
    dispatch(flashActions.flashSuccess(message));
    setTimeout(() => {
      dispatch(flashActions.removeFlash());
    }, 6000);
  };
};

export const displayInfo = (message) => {
  return (dispatch) => {
    dispatch(flashActions.flashInfo(message));
    setTimeout(() => {
      dispatch(flashActions.removeFlash());
    }, 6000);
  };
};

export const displayWarning = (message) => {
  return (dispatch) => {
    dispatch(flashActions.flashWarning(message));
    setTimeout(() => {
      dispatch(flashActions.removeFlash());
    }, 6000);
  };
};

export const displayError = (message) => {
  return (dispatch) => {
    dispatch(flashActions.flashError(message));
    setTimeout(() => {
      dispatch(flashActions.removeFlash());
    }, 6000);
  };
};
