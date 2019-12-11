// import { createStore } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import reducer, { initialState } from './reducers';

// const store = createStore(reducer);
// export default store;
export const StoreContext = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

export const withGlobalStore = (Component) => (props) => {
  const { state, dispatch } = React.useContext(StoreContext);
  return (
    <Component state={state} dispatch={dispatch} {...props} />
  );
};
