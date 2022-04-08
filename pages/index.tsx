import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import useSWR from "swr";
import { TodoList } from "../components/TodoList";
import TodoApi from "../lib/api/todos";
import UserApi from "../lib/api/user";
import { SERVER_BASE_URL } from "../lib/utils/constant";
import MyToDo from "./learn/todo";

export default function Home({ todos }) {



 

  return (
    <>
      <MyToDo findTodos={todos} />
      <Link href="/about">
        <a>1231231</a>
      </Link>
      <Link href="http://localhost:8000/api/v1/auth/logout">
        <a>Logout</a>
      </Link>
      <Link href="http://localhost:8000/api/v1/todo/findall">
        <a>todos</a>
      </Link>
      <Link href="http://localhost:8000/api/v1/auth/me">
        <a className="mx-4">Me</a>
      </Link>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const cookie = context.req?.headers.cookie as string;
  if (!cookie) {
    context.res
      ?.writeHead(301, {
        Location: "http://localhost:3000/login",
      })
      .end();
  } else {
    const todos = await TodoApi.findAll(cookie);
    return {
      props: { todos },
    };
  }

  
}

  // try {
  //   const { data } = await UserApi.whoami();
  //   const todos = await TodoApi.findAll();
  //   console.log(todos)
  //   return {
  //     props: {
  //       todos
  //     }
  //   }
  //   if (data) {
  //     const { userId } = data
  //     // const something = await TodoApi.findTodos(userId)
  //   }

  // } catch (error) {

  //   // context.res?.writeHead(302, {
  //   //   Location: "http://localhost:3000/login"
  //   // }).end()
  // }


// Home.getInitialProps = async (context: NextPageContext) => {
//   // 1. check cookie
//   // 2. find user
//   // 3. without cookie -> login
//   const cookie = context.req?.headers.cookie as string;
//   // let resp;
//   try {
//     const { data } = await UserApi.whoami(cookie);
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//     context.res?.writeHead(302, {
//       Location: "http://localhost:3000/login"
//     }).end()
//   }

//   // try {
//   //   resp = await fetch("http://localhost:8000/api/v1/auth/me", {
//   //     headers: {
//   //       cookie: cookie!
//   //       Access-Control-Allow-Origin: true
//   //     }
//   //   })
//   // } catch (error) {
//   //
//   // }

//   // if (resp.status === 401 && !context.req) {
//   //   Router.replace('/login')
//   //   return;
//   // }

//   // if (resp.status === 401 && context.req) {
//   //   context.res?.writeHead(302, {
//   //     Location: 'http://localhost:3000/login'
//   //   })
//   //   context.res?.end()
//   // }

//   // data.userId can be extracted from userId

//   return {
//     props: {}
//   };
// }
