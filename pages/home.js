import Link from "next/link";

import { Button, Container } from "react-bootstrap";
import { useAuth } from "../context/auth-context";

function Home(props) {
  const { currentUser } = useAuth();
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center flex-column text-dark bg-gray-400"
      >
        <section className="margin--top--medium center bg-white p-3 shadow rounded-1">
          <h1 className="">Velkommen til tellelista!</h1>
          {/* <h1>{currentUser.email}</h1> */}
          <h2>Dette er en beskyttet rute!</h2>
          <Link href={"/Reg"} passHref>
            <Button variant="primary" className="mx-2">
              Ny telling
            </Button>
          </Link>
          <Link href={"/Old-lists"} passHref>
            <Button variant="primary">Finn gammel liste</Button>
          </Link>
        </section>
      </Container>

      <div className="container justify-center font-sans flex flex-row mt-6 h-96 bg-gray-200 ">
        <div className="countedcomponent">
          <div className="h-12 w-64 bg-white rounded-t-lg">
            <div className=" text-gray-600 mt-2 ml-9 text-left text-lg tracking-wider">
              Avdeling 5
            </div>
          </div>
          <div className="h-12 w-64 bg-blue-500 rounded-b-lg flex flex-row align-baseline justify-around">
            <div className="text-blue-100 mt-3 ml-3 tracking-wider">
              Se hele listen
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-3 mr-7 text-blue-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </div>
        </div>

        {/* <Popover className="relative">
          {({ open }) => (
            <>
              <div className="h-14 w-64 bg-white rounded-t-lg mt-4 flex align-baseline">
                <span className=" text-gray-600 mt-2 ml-9 text-center text-lg tracking-wider">
                  avdeling.props{" "}
                </span>
              </div>

              <Popover.Button>
                <div
                  className={`${
                    open
                      ? "rounded-b-0 h-14 w-64 bg-blue-500 flex flex-row align-baseline justify-around"
                      : "h-14 w-64 bg-blue-500 rounded-b-lg flex flex-row align-baseline justify-around"
                  }`}
                >
                  <div className="text-blue-100 mt-3 ml-3 tracking-wider">
                    Se hele listen
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-3 mr-7 text-gray-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </Popover.Button>

              <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-2 bg-blue-500 w-64 rounded-b-lg text-blue-100">
                  <ul className="mt-2">
                    <li>lorem</li>
                  </ul>
                </div>

                <img src="/solutions.jpg" alt="" />
              </Popover.Panel>
            </>
          )}
        </Popover> */}
      </div>
    </>
  );
}

export default Home;
