import Head from "next/head";
import Navbar from "../../components/Navbar";
import PicsNav from "../../components/PicsNav";

export default function Likes() {
  return (
    <>
      <Head>
        <title>Pics</title>
      </Head>
      <Navbar />
      <PicsNav />
    </>
  );
}
