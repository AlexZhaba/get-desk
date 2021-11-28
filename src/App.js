import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import SearchPage from "./pages/search";
import FooterComponent from "./components/FooterComponent/FooterComponent";
const App = () => {
  return (
    <>
      <HeaderComponent />
      <SearchPage />
      {/*<FooterComponent />*/}
    </>
  );
};

export default App;
