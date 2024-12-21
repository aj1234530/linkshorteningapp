import CreateShortLink from "../components/CreateShortLink";
import Navbar from "../components/Navbar";
import { useState } from "react";
function Root() {
  const [showLink, setShowLink] = useState(false);
  const [linkInput, setLinkInput] = useState<null | string>(null);
  const handleClick = () => {
    setShowLink((prev) => !prev);
  };
  return (
    <div>
      <Navbar />
      <div>
        <h1>Short Links with </h1>
        <h2>superpowers</h2>
        <p>Dub.co is the open-source link management</p>
        <p>infrastructure for modern marketing teams</p>
        <div>
          <div>
            <input
              placeholder="Shorten any link"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLinkInput(e.target.value)
              }
            ></input>
            {/* <button onClick={<CreateShortLink longLink="linkInput" />}>Short Now</button>  we can't do this but we can maintain a state var if ture we can run it*/}
            <button onClick={handleClick}>Short Now</button>
            <div className="root-page-short-link-area">
              Your Short Link :
              {showLink && <CreateShortLink longLink={linkInput} />}
              {showLink && <div>true</div>}
            </div>
          </div>
          <div>Want to claim your links, edit,or view their analytics</div>
          <div>Create a free account to get started </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
