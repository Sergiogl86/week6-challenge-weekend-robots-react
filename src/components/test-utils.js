import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../redux/store";

const renderWithProviders = (component, initialState) => {
  const store = configureStore(initialState);
  const AllTheProviders = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return render(component, { wrapper: AllTheProviders });
};

export default renderWithProviders;
