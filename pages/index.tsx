import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'


export default function Home() {
  return (
    <>
    <h1>Successfully login in</h1>
   <h1>Welcome to home page</h1>
   <Link href="/about"><a >1231231</a></Link>
   </>
  )
}



// Home.getInitialProps = async (context: NextPageContext) => {
//   // 1. check cookie
//   // 2. find user
//   // 3. without cookie -> login
//   const cookie = context.req?.headers.cookie as string;

//   const resp = await fetch("http://localhost:8000/api/v1/auth/me", {
//     headers: {
//       cookie: cookie!
//     }
//   })
  
//   if (resp.status === 401 && !context.req) {
//     Router.replace('/login')
//     return;
//   }

//   if (resp.status === 401 && context.req) {
//     context.res?.writeHead(302, {
//       Location: 'http://localhost:3000/login'
//     })
//     context.res?.end()
//   }
  
  
//   // data.userId can be extracted from userId
  
//   return {
//     props: {}
//   };
// } 








