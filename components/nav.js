import Link from "next/link";
function Nav() {
  const test = "Hello";
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-body text-dark container-fluid
    "
    >
      <div className="container-fluid">
        <Link href={"/"} passHref>
          <a className="navbar-brand">TelleListe</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href={"/"} passHref>
                <a className="nav-link active" aria-current="page">
                  Hjem
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/reg"} passHref>
                <a className="nav-link">Registrere barn</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/telling"} passHref>
                <a className="nav-link">Ny telleliste</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/tidligerelister"} passHref>
                <a className="nav-link">Vis gamle lister</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
