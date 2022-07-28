import { Popover } from "@headlessui/react";

function NewCounting() {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <div className="h-14 w-64 bg-sky-800 rounded-t-lg mt-4 flex align-baseline">
              <span className="text-sky-50 mt-2 ml-9 text-center text-lg tracking-wider">
                avdeling.props{" "}
              </span>
            </div>

            <Popover.Button>
              <div
                className={`${
                  open
                    ? "rounded-b-0 h-14 w-64 bg-white flex flex-row align-baseline justify-around"
                    : "h-14 w-64 bg-white rounded-b-lg flex flex-row align-baseline justify-around"
                }`}
              >
                <div className="text-gray-700 mt-3 ml-3 tracking-wider">
                  Se hele listen
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-3 mr-7 text-gray-600"
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
              <div className="grid grid-cols-2 bg-white w-64 rounded-b-lg text-gray-700">
                <ul className="mt-2">
                  <li className="">lorem</li>
                </ul>
              </div>

              <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}

export default NewCounting;
