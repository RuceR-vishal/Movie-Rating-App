import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import data from "../data.json";
// Initial state
const initialState = {
  bannerData: data.bannerData,
  theaterData: data.inTheaters,
  upcomingData: data.upcoming,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteArticle(id) {
    dispatch({
      type: "DELETE_ARTICLE",
      payload: id,
    });
  }

  function addArticle(article) {
    dispatch({
      type: "ADD_ARTICLE",
      payload: article,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        bannerData: state.bannerData,
        theaterData: state.theaterData,
        upcomingData: state.upcomingData,
        deleteArticle,
        addArticle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
