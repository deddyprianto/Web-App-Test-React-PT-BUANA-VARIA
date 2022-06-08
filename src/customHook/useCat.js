import axios from "axios";
import useSWRInfinite from "swr/infinite";

export const useCat = (limit) => {
  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          "x-api-key": `ca48c061-5e6c-4852-9eb3-fb864ebe6e7e`,
        },
      })
      .then((res) => res.data);
  const { data, error, size, setSize } = useSWRInfinite(
    (pageIndex, previousPageData) => {
      pageIndex = pageIndex + 1;
      if (previousPageData && !previousPageData.length) return null;
      return `https://api.thecatapi.com/v1/breeds?page=${pageIndex}&limit=${limit}`; // SWR key
    },
    fetcher
  );
  return {
    cat: data,
    isLoading: !error && !data,
    isError: error,
    size: size,
    setSize: setSize,
  };
};
