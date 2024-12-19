import { useState } from "react";

export let urls: Map<string, string> = new Map(); //TODO - notice the type definition
export let counterForUrl: Map<string, number> = new Map(); //will store the url counter
// export let v: number[] = [];
// v.push(2);
function CreateLink() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const shortenedLink = linkShortnerEngine(url); //call the fxn with the url (store in use state);
    setShortUrl(shortenedLink);
    console.log(urls);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="url-input"
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <button className="submit-button" type="submit">
          {" "}
          Shorten Your Url
        </button>
        {shortUrl && (
          <p>
            Your short-link: <div className="short-url-box">{shortUrl}</div>
          </p>
        )}
      </form>
    </>
  );
}

//will take string
const linkShortnerEngine = (url: string) => {
  const shortenedUrl = "localhost:5173/dub/" + Date.now();
  urls.set(shortenedUrl, url);
  console.log(urls);
  return shortenedUrl;
};

export default CreateLink;
