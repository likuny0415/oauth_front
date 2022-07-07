import type { NextPageContext } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import TodoApi from "../lib/api/todos";
import MyToDo from "./learn/todo";

export default function Home({ todos, cookie }) {


  return (
    <>

    <Head>
      <title>Todo</title>
    </Head>
    <Navbar />
      <MyToDo findTodos={todos} cookie={cookie} />
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const cur_cookie = context.req?.headers.cookie as string;
  
  if (!cur_cookie) {
   return {
    redirect: {
      permanent: false,
      destination: "/login",
    },
    props:{},
   }
  } else {
    const cookie = cur_cookie.split("=")[1];
    const todos = await TodoApi.findAll(cookie);
    return { props: { todos, cookie}}
    
  }
}
