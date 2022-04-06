import axios from "axios";
import { NextPageContext } from "next";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Loading from "../../components/Loading";
import TodoApi from "../../lib/api/todos";
import MyToDo from "./todo";





export default function Test({cookie}) {
    const [todos, setTodos] = useState([]);
    function fetcher(url, cookie) {
        return fetch(url, {
          method: "get",
          headers: { "Content-Type": "application/json", "cookie": cookie },
          credentials: 'include'
        }).then(res => res.json())
        .then((data) => data.r);
      }
    const { data, error} = useSWR(["http://localhost:8000/api/v1/todo/findall", cookie], fetcher) 
  
    
    
  
  if (error) return <div>Failed to load</div>
  if (!data) return <Loading />


  
    return (
       <div>
             
         <MyToDo findTodos={data} />
       </div>
    )
// return <h1>Hello</h1>
}

export async function getClient(context: NextPageContext) {
    const cookie = context.req?.headers.cookie

    return { props: { cookie}}
    
}