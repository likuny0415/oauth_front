import Head from "next/head";
import { useState } from "react";
import GalleryGrid from "../../components/GalleryGrid";
import LoadMore from "../../components/LoadMore";
import Navbar from "../../components/Navbar";
import PicsNav from "../../components/PicsNav";
import Search from "../../components/Search";
import useOnScreen from "../../lib/hooks/use-on-screen";
import useUnsplash from "../../lib/hooks/use-splash.hook";

export default function Pics() {
  const [query, setQuery] = useState(undefined);
  const options = {
    root: null,
    rootMargin: "100% 0px",
    threshold: 1.0,
  };
  const { isVisible, containerRef } = useOnScreen(options);
  const { data, isLoading, isError, isLoadingMore, isReachingEnd } =
    useUnsplash({ isVisible, query });

  return (
    <>
      <Head>
        <title>Pics</title>
      </Head>
      <Navbar />
      <PicsNav />
      <Search value={query} onChange={(value) => setQuery(value)}/>
      
      {/* <GalleryGrid data={data} loading={isLoading} /> */}
      <LoadMore
        containerRef={containerRef}
        error={isError}
        loadingMore={isLoadingMore}
        reachingEnd={isReachingEnd}
      />
    </>
  );
}
