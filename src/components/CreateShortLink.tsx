import axios from "axios";
import { useEffect, useState } from "react";
//on mouting this coomponet it runs and gives the click
//CAN WE CREATE CUSTOM HOOK OUT OF THIS
function CreateShortLink({ longLink }: { longLink: string | null }) {
  const [shortenedLink, setshortenedLink] = useState<string | null>(null);
  const createShortLink = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/createshortlinks",
        {
          originalUrlFromBody: longLink,
        }
      );
      setshortenedLink(response.data.shortenedUrl);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    createShortLink();
    return () => setshortenedLink(null); //setting the shortened link to null on unmounting
  }, []);
  return (
    <div>
      <p>{shortenedLink}</p>
    </div>
  );
}

export default CreateShortLink;
