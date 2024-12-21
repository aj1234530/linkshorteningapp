//we won't use window.location.href
//we will try to use useNavigate() from rrd
//set path /dub/* to this componet
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UrlRedirectnew() {
  const location = useLocation();
  const handleRedirect = async () => {
    const uniqueSlugForBackend = location.pathname.split("").slice(6).join(""); //using slice to cut the (/user/)
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/test/getorginallink",
        {
          //sending the body , to be cofiremed if reachers(diff synatax than axios post)
          shortenedUrlUniqueSlug: uniqueSlugForBackend,
        }
      );
      console.log(response);
      console.log(response.data);
      if (response.status === 200) {
        console.log("invalid");
        const orignalUrl = response.data.originalUrl;
        window.location.href = `${orignalUrl}`;
      }
    } catch (err) {
      console.log("invalid");
    }
  };
  useEffect(() => {
    //just calling the fxn
    handleRedirect();
  }, []);
  return <></>;
}

export default UrlRedirectnew;
