import React, { createContext, useState } from 'react';
const StoreContext = createContext({});
function StoreProvider(props) {
  const [state, setState] = useState({
    loginModal: false,
    signUpModal: false,
    searchInput: null
  });
  const value = { state, setState };
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
const Consumer = StoreContext.Consumer;
export { Consumer, StoreProvider, StoreContext };