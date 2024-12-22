import { useState } from "react";

function CreateLinkModal() {
  // const [linkInput, setLinkInput] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* intention is to open the form when the button is clicked */}

      {isOpen ? (
        <>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <form className="form-modal">
            <label htmlFor="destination-url">Destination Url</label>
            <input id="destination-url" required></input>
            <label htmlFor="tags">Tags</label>
            <input id="tags" placeholder="optional"></input>
            <label htmlFor="comments">Comments</label>
            <input id="comments"></input>
          </form>
        </>
      ) : (
        <button onClick={() => setIsOpen(true)}>Create Link</button>
      )}
    </div>
  );
}

export default CreateLinkModal;
