import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <ul className="menu menu-horizontal">
            <li>
              <Link to={"/basic-challanges"}>Basic Challanges</Link>
            </li>
            <li>
              <Link to={"/Intermediate-challanges"}>Intermediate Challanges</Link>
            </li>
            <li>
              <Link to={"/Advanced-challanges"}>Advanced Challanges</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="grow container">
        <Outlet />
      </main>
      <footer>Copyright @ 2024 - Kowsir Ahmed</footer>
    </>
  );
};
