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
  const cookie = context.req?.headers.cookie as string;
  
  if (!cookie) {
    context.res
      ?.writeHead(302, {
        Location: process.env.LOGIN_PAGE,
      })
      .end();
      return { props: {} }
  } else {
    const todos = await TodoApi.findAll(cookie);
    return { props: { todos, cookie}}
    
  }
}
