import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { urls, counterForUrl } from "./CreateLink";

function UrlRedirect() {
  console.log(urls);
  const location = useLocation();
  useEffect(() => {
    const key = `localhost:5173${location.pathname}`;
    console.log(key);
    console.log(urls);
    const originalUrl = urls.get(key);
    console.log(originalUrl);
    // if (originalUrl) {
    //   window.location.href = originalUrl;
    // }
  });

  return <div>{location.pathname}</div>;
}

export default UrlRedirect;
