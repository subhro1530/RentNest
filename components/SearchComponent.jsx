import React from "react";

function SearchComponent() {
  const locationButton = [
    {
      title: "BTM Layout",
      route: "",
    },
    {
      title: "ITI Layout",
      route: "",
    },
    {
      title: "Kundanahalli",
      route: "",
    },
    {
      title: "Whitefield",
      route: "",
    },
    {
      title: "HSR Layout",
      route: "",
    },
    {
      title: "Marathalli",
      route: "",
    },
  ];
  return (
    <div className="w-full overflow-hidden">
      <div
        className="p-3 rounded-lg items-center justify-center"
        style={{
          background: "white",
        }}>
        <div className=" w-full flex flex-row justify-between items-center gap-3">
          <form className="w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium sr-only text-black">
              Search
            </label>
            <div className=" w-full relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Location"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-80font-medium rounded-lg text-sm px-4 py-2 ">
                Search
              </button>
            </div>
          </form>
          <div className="flex">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <p>
                <span>Near Me</span>
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full  relative-[1] mt-3">
          {locationButton.map((btn) => (
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                {btn.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
