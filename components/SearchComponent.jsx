import React from "react";

function SearchComponent() {
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
              for="default-search"
              class="mb-2 text-sm font-medium sr-only text-black">
              Search
            </label>
            <div class=" w-full relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-400"
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
                class="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-80font-medium rounded-lg text-sm px-4 py-2 ">
                Search
              </button>
            </div>
          </form>
          <div className="flex">
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <p>
                <span>Near Me</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
