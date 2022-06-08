import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { actionData } from "../features/root/appSlice";

const InputSearch = () => {
  const nameSearch = useRef(null);
  const dispatch = useDispatch();

  const getData = async () => {
    const name = nameSearch.current.value;
    try {
      const data = await axios.get(
        `https://api.thecatapi.com/v1/breeds/search?q=${name}`,
        {
          headers: {
            "x-api-key": `ca48c061-5e6c-4852-9eb3-fb864ebe6e7e`,
          },
        }
      );
      dispatch(actionData({ dataSearch: data.data }));
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 flex flex-col items-center">
      <div className="flex w-full">
        <input
          id="email"
          ref={nameSearch}
          type="text"
          className="w-[30%] px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          placeholder="SearchBy Name..."
        />
        <button
          onClick={getData}
          className="ml-2 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default InputSearch;
