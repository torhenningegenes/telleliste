import Link from "next/link";

import { useAuth } from "../context/auth-context";
import { useRouter } from "next/router";

function Home() {
  const { currentUser } = useAuth();
  const router = useRouter();

  if (currentUser) {
    console.log(`${currentUser.email} is logged in`);
    router.push("/home");
  }
  return (
    <>
      <div
        className="container mx-auto px-4
        "
      >
        <h1 className="text-center main__header shadow-lg mb-5 telle--lista--heading1">
          Velkommen til Tellelista for barnehage
        </h1>

        <Link href={"/login-user"} passHref>
          <button className="center btn btn-lg mb-5 text-dark">Login</button>
        </Link>

        {/* <Link href={"/new-user"} passHref>
          <button className="center btn btn-lg text-dark">Ny bruker</button>
        </Link> */}
      </div>
    </>
  );
}

export default Home;
