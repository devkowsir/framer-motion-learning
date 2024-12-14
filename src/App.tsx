import { Link, NavLink, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <nav className="navbar shadow-md">
        <div className="container flex flex-col gap-4 justify-between sm:flex-row">
          <Link to={"/"} className="text-xl font-bold text-primary">
            Framer Motion Learning
          </Link>
          <div className="flex flex-col">
            <div className="-mb-4 menu-title w-full text-center">Challanges</div>
            <ul className="menu menu-sm menu-horizontal text-base-content/50 font-medium">
              <li className="w-min">
                <NavLink to={"/basic-challanges"}>Basic</NavLink>
              </li>
              <li className="w-min">
                <NavLink to={"/Intermediate-challanges"}>Intermediate</NavLink>
              </li>
              <li className="w-min">
                <NavLink to={"/Advanced-challanges"}>Advanced</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="grow container">
        <Outlet />
      </main>
      <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <aside>
          <p>Copyright @ 2024 - Kowsir Ahmed</p>
        </aside>
      </footer>
    </>
  );
};
