import React from "react";

const HomeScreen = () => {
  return (
    <div className="container mx-auto px-3 md:px-12 pt-7 md:pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-center">
          <img
            src="makelinktiny_logo.svg"
            alt="makelinktiny_logo"
            className="h-64 mx-auto md:h-full"
          />
        </div>
        <div className="text-left pt-8 md:pt-32 md:pl-7">
          <p className="text-5xl md:text-6xl">Make Link Tiny</p>
          <p className="mt-6 text-lg md:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            odio asperiores consectetur modi placeat. Pariatur, neque.
          </p>
          <form className="flex flex-col mt-5">
            <label htmlFor="url" className="text-lg text-purple-700 mb-2">
              Enter URL
            </label>
            <input
              type="url"
              placeholder="Enter URl..."
              id="url"
              required
              className="px-5 py-3 rounded ring-2 ring-gray-200 transition duration-200 focus:outline-none focus:ring-purple-700 text-xl"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-purple-700 text-white text-xl font-semibold transition duration-200 hover:bg-purple-800 focus:outline-none rounded-md mt-5 max-w-max"
            >
              Shorten
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col text-center w-full my-6">
        <a
          href="https://github.com/harshverma036"
          className="text-2xl md:text-3xl mb-3 text-gray-700 hover:text-black"
        >
          <i className="fab fa-github" />
        </a>
        <p className="text-gray-600">
          Developed With ❤ By{" "}
          <a
            href="https://harshverma.netlify.app/"
            className="font-medium text-purple-600 hover:text-purple-900"
          >
            Harsh Verma
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
