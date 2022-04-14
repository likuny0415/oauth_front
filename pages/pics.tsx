import Head from "next/head";
import { useRef, useState } from "react";
import useSWR from "swr";
import GalleryGrid from "../components/GalleryGrid";
import LoadMore from "../components/LoadMore";
import Navbar from "../components/Navbar";
import generateColumns from "../lib/helper/generate-colomn.helper";
import useOnScreen from "../lib/hooks/use-on-screen";
import useUnsplash from "../lib/hooks/use-splash.hook";
import fetcher from "../lib/utils/fetcher";

export default function Pics() {
  const [query, setQuery] = useState(undefined);
  const options = {
    root: null,
    rootMargin: "10px",
    threshold: 1.0,
  };
  const { isVisible, containerRef } = useOnScreen(options);
  const { data, isLoading, isError, isLoadingMore, isReachingEnd } =
    useUnsplash({ isVisible, query });
  console.log(isVisible);

  if (data) {
    return (
      <>
        <Head>
          <title>Pics</title>
        </Head>
        <Navbar />
        <GalleryGrid data={generateColumns(data)} loading={isLoading} />
        <LoadMore
          containerRef={containerRef}
          error={isError}
          loadingMore={isLoadingMore}
          reachingEnd={isReachingEnd}
        />
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center">
        Something went wrong
      </div>
    </>
  );
}
