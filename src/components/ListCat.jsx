import React, { useRef, useState, useCallback } from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { createTrackedSelector } from "react-tracked";
import "../customCss/animation.css";
import { useCat } from "../customHook/useCat";
import InputSearch from "./InputSearch";
const useTrackedSelector = createTrackedSelector(useSelector);

const ListCat = () => {
  const state = useTrackedSelector();
  const { dataSearch } = state.app.dataDefault;
  const [idDetail, setIdDetail] = useState("");
  const { cat, isError, isLoading, setSize } = useCat();
  const observer = useRef();

  const lastEl = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSize((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  return (
    <div className="w-full flex-col justify-center ">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="w-4/5 fixed top-0 bg-white h-20 z-50">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mt-2">
              List Kucing
            </h1>
            {cat?.[0].length === 27 ? (
              <p className="text-gray-500">Show 0 data</p>
            ) : dataSearch.length === 0 ? (
              <p className="text-gray-500">Show {cat?.[0].length} data</p>
            ) : (
              <p className="text-gray-500">Show {dataSearch.length} data</p>
            )}
            <hr className="border-gray-200 dark:border-gray-700" />
          </div>
          <div className="w-full mt-16">
            <InputSearch />
          </div>
          {/* loop */}
          {dataSearch.length === 0
            ? cat?.map((data) => {
                if (data.length === 27) {
                  return (
                    <div key={data} className="w-full flex flex-col mt-10">
                      <button
                        onClick={() => setSize(10)}
                        className="w-40 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                      >
                        <ArrowLeftIcon className="w-5 h-5 text-white" />
                        <span className="mx-1">Show 10 data</span>
                      </button>
                      <h1 className="text-center text-lg text-red-500">
                        You have reached the last data limit !
                      </h1>
                    </div>
                  );
                } else {
                  return data.map((item, i) => {
                    if (data.length === i + 1) {
                      return (
                        <div ref={lastEl} key={i} className="mt-10">
                          <div>
                            <button
                              className="flex items-center focus:outline-none"
                              onClick={() => setIdDetail(item.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                              <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                                {item.name}
                              </h1>
                            </button>
                            {item.id === idDetail && (
                              <div className="flex mt-8 md:mx-10 scale-up-ver-top ">
                                <span className="border border-blue-500"></span>
                                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                                  {item.description}
                                </p>
                              </div>
                            )}
                          </div>
                          <hr className="my-8 border-gray-200 dark:border-gray-700" />
                        </div>
                      );
                    } else {
                      return (
                        <div key={i} className="mt-10">
                          <div>
                            <button
                              className="flex items-center focus:outline-none"
                              onClick={() => setIdDetail(item.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                              <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                                {item.name}
                              </h1>
                            </button>
                            {item.id === idDetail && (
                              <div className="flex mt-8 md:mx-10 scale-up-ver-top ">
                                <span className="border border-blue-500"></span>
                                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                                  {item.description}
                                </p>
                              </div>
                            )}
                          </div>
                          <hr className="my-8 border-gray-200 dark:border-gray-700" />
                        </div>
                      );
                    }
                  });
                }
              })
            : dataSearch.map((item, i) => (
                <div key={i} className="mt-10">
                  <div>
                    <button
                      className="flex items-center focus:outline-none"
                      onClick={() => setIdDetail(item.id)}
                    >
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        ></path>
                      </svg>
                      <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                        {item.name}
                      </h1>
                    </button>
                    {item.id === idDetail && (
                      <div className="flex mt-8 md:mx-10 scale-up-ver-top ">
                        <span className="border border-blue-500"></span>
                        <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                  <hr className="my-8 border-gray-200 dark:border-gray-700" />
                </div>
              ))}

          {/* loop */}
        </div>
      </section>
      {isLoading && (
        <div className="w-full flex justify-center items-center mt-10">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}
      {isError && (
        <div className="w-full flex justify-center items-center mt-10">
          <p className="text-gray-500">Error,{isError.message}</p>
        </div>
      )}
    </div>
  );
};

export default ListCat;
