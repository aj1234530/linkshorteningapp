import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div className="landing-page">
      <Navbar />
      <h1>Short Links with </h1>
      <h2>superpowers</h2>
      <p>Dub.co is the open-source link management</p>
      <p>infrastructure for modern marketing teams</p>
      <div>
        <div>
          <input placeholder="Shorten any link"></input>
          <button>Short Now</button>
        </div>
        <div>Want to claim your links, edit,or view their analytics</div>
        <div>Create a free account to get started </div>
      </div>
    </div>
  );
}

export default Landing;

//unautheticated
