import { checkIsManualRevalidate } from "next/dist/server/api-utils";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Bookmarks({template}) {

    // <BookmarkList bookmarks={bookmarks}>
    // <BookmarkItem bookmark={bookmark} >

    
   
    

    return (
        <>
        <Head>
        <title>Bookmarks</title>
        <meta
          name="Urls"
          content="A page to store all your urls"
        />
        </Head>
        <Navbar />
        <div className="container mt-10 grid md:grid-cols-3  text-center gap-4 ">
          <div className="bg-red-50">1</div>
          <div className="bg-red-50">2</div>
          <div className="bg-red-50">3</div>
          <div className="bg-red-50">4</div>
          <div className="bg-red-50">5</div>
          <div className="bg-red-50">6</div>
        </div>
        </>
    )
}

export async function getServerSideProps() {
  
  return { props: {}}
}