import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import GalleryGrid from "../components/GalleryGrid";
import Navbar from "../components/Navbar";
import generateColumns from "../lib/helper/generate-colomn.helper";
import useOnScreen from "../lib/hooks/use-on-screen";
import useUnsplash from "../lib/hooks/use-splash.hook";
import fetcher from "../lib/utils/fetcher";

export default function Pics() {


    const [query, setQuery] = useState(undefined);
    const { isVisible, containerRef } = useOnScreen();
    const { data, isLoading } = useUnsplash({ isVisible, query })

    // console.log(data)
    // console.log(generateColumns(data))
    // const a = generateColumns(data);
    // console.log(a.map((grid, index) => {
    //     grid.map((item, itemIndex) => {
    //         console.log("item is", item, " itemIndex is", itemIndex)
    //     })
    // }))
    
    

    if (data) {
        return (
            <>
            <Head>
                <title>Pics</title>
                
            </Head>
            <Navbar />
            <GalleryGrid data={generateColumns(data)} loading={isLoading} />
            </>
        )
    }

    return (<>
    <div>
        bad</div></>)
}
