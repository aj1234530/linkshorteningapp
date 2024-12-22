import { Link } from "react-router-dom";
// import CreateLinkModal from "../components/CreateLinkModal";
// import NavbarForLogged from "../components/NavbarforLogged";

function Dashboard() {
  return (
    <div>
      <Link to="/">Create New Link</Link>
      {/* <CreateLinkModal />  to be implemented for all the images*/}
      <Link to="/links">
        <button>Go to Your Links</button>
      </Link>
      <Link to="/analytics">
        <button>Analytics</button>
      </Link>
    </div>
  );
}

export default Dashboard;
