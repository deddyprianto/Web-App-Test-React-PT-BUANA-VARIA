import React, { useState } from "react";
import TableCat from "./TableCat";
import { useCat } from "../customHook/useCat";

function Home() {
  const [limit, setLimit] = useState(10);
  const { cat, isLoading, isError } = useCat(limit);
  return (
    <div className="w-screen h-screen bg-indigo-50">
      <div className="overflow-y-auto flex items-center justify-between w-full container mx-auto h-full">
        <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow h-4/5 overflow-y-auto">
          {isLoading ? (
            <div className="py-10 flex justify-center items-center w-full">
              <p className="text-red-500">Loading...</p>
            </div>
          ) : isError ? (
            <div className="py-10 flex justify-center items-center w-full">
              <p className="text-red-500">Erorr {isError.message}</p>
            </div>
          ) : (
            cat.map((item) => (
              <div className="w-full h-full">
                <TableCat dataRes={item} />
              </div>
            ))
          )}
        </div>
        <button
          className="rounded-lg bg-red-500"
          onClick={() => setLimit((prev) => prev + 10)}
        >
          Load More...
        </button>
      </div>
    </div>
  );
}
export default Home;
