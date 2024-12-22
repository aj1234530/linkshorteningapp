import { useEffect, useState } from "react";
import axios from "axios";
interface fetchedLink {
  id: string;
  userId: string;
  shortenedUrlUniqueSlug: string;
  originalUrl: string;
  clicksCount: number; //be careful here may be coming as string
}
function Links() {
  const [fetchedLinks, setFectchedLinks] = useState<fetchedLink[]>([]);
  //fetch call to backedn //we can cache it ()
  const fetchAllLinks = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/v1/user/links",
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    if (response.status === 200) {
      setFectchedLinks(response.data.urlsArray);
    }
    console.log(response);
  };
  useEffect(() => {
    try {
      fetchAllLinks();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      {fetchedLinks.length > 0 ? (
        fetchedLinks.map((link) => (
          <div key={link.id}>
            <a href={link.originalUrl}>{link.originalUrl}</a>
            {/* may need to correct here based on base url */}
            <br></br>
            <a
              href={`http://localhost:5173/user/${link.shortenedUrlUniqueSlug}`}
            >{`localhost:5173/user/${link.shortenedUrlUniqueSlug}`}</a>
            <div>{link.clicksCount}</div>
          </div>
        ))
      ) : (
        <div>No Links Found</div>
      )}
    </div>
  );
}

export default Links;
