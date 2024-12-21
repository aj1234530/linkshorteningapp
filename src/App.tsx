import { useEffect, useState } from "react";
import UrlRedirect from "./components/UrlRedirectold";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  redirect,
  BrowserRouter,
  Routes,
  useLocation,
} from "react-router-dom";
import CreateLink from "./CreateLink";
import UrlRedirectnew from "./components/UrlRedirectnew";
function App() {
  return (
    <>
      <div>root page</div>
      <Router>
        <Routes>
          <Route path="/user/*" element={<UrlRedirectnew />}></Route>
          <Route path="/createlink" element={<CreateLink />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
