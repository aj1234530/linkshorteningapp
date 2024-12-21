import { useState } from "react";
import axios from "axios";
export let urls: Map<string, string> = new Map(); //TODO - notice the type definition
export let counterForUrl: Map<string, number> = new Map(); //will store the url counter
function CreateLink() {
  const [originalUrl, setOriginalUrl] = useState("");
  console.log(originalUrl);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const shortenedUrl = linkShortnerEngine(originalUrl); //call the fxn with the url (store in use state);
    setShortUrl(`localhost:5173/dub/${shortenedUrl}`); //changing
    const response = await axios.post(
      "http://localhost:8080/createshortlinks",
      {
        shortenedUrl: shortenedUrl,
        originalUrl: originalUrl,
      }
    );
    setOriginalUrl(""); //not working , to empty the the input after the link shortened
    console.log(response);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="url-input"
          onChange={(e) => setOriginalUrl(e.target.value)}
        ></input>
        <button className="submit-button" type="submit">
          {" "}
          Shorten Your Url
        </button>
        {shortUrl && (
          <div>
            Your short-link:{" "}
            <a className="short-url-box" href={`http://${shortUrl}`}>
              {shortUrl}
            </a>
          </div>
        )}
      </form>
    </>
  );
}

//will take string
const linkShortnerEngine = (url: string) => {
  const shortenedUrl = `${Date.now()}`; //changing - only sending the slug
  urls.set(shortenedUrl, url);
  return shortenedUrl;
};

export default CreateLink;
