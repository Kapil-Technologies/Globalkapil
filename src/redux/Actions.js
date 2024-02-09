import { CareerActions } from "./slices/Careers";
import { dispatch } from "./store";


export const getOpeningData = (data) => {
  const response = dispatch(CareerActions.jobopening(data));
  return response;
};