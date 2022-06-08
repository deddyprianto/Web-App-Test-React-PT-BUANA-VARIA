import React, { useRef, useState, useCallback } from "react";
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
  const { cat, isError, isLoading, setSize, size } = useCat();
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
  let totalCat = 0;
  for (let i = 0; i < cat?.length; i++) {
    totalCat += cat[i]?.length;
  }

  return (
    <div className="w-full flex-col justify-center ">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="w-4/5 fixed top-0 bg-white h-20 z-50">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mt-2">
              List Cat
            </h1>
            List All Cat {totalCat}
            <hr className="border-gray-200 dark:border-gray-700" />
          </div>
          <div className="w-full mt-16">
            <InputSearch />
          </div>
          {dataSearch.length === 0 ? (
            <>
              {isLoading ? (
                <p className="text-gray-500  mt-5">Loading...</p>
              ) : isError ? (
                <p className="text-red-500  mt-5">Error {isError.message}</p>
              ) : (
                cat.map((data) => {
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
                })
              )}
            </>
          ) : (
            dataSearch.map((item, i) => (
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
            ))
          )}
          <div>
            <h1
              className={`text-gray-600 ${
                size === 7 || dataSearch.length > 0 ? "hidden" : "inline"
              }`}
            >
              Loading...
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListCat;
