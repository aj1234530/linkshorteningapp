import { useEffect, useState } from "react";
import UrlRedirect from "./components/UrlRedirect";
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
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dub/*" element={<UrlRedirect />}></Route>
          <Route path="/createlink" element={<CreateLink />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
