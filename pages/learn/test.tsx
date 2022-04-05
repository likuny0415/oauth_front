import axios from "axios";
import { NextPageContext } from "next";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Loading from "../../components/Loading";
import TodoApi from "../../lib/api/todos";





export default function Test() {
    const [todos, setTodos] = useState([]);
    const fetcher = (url) => fetch(url).then(res => res.json());
    // const { data, error} = useSWR("http://localhost:8000/api/v1/todo/findall", fetcher) 
   
    useEffect(() => {
        
        fetch("http://localhost:8000/api/v1/todo/findall")
        .then((res) => res.json())
        .then((data) => {
            setTodos(data)
        })
    }, [])

  
//   if (error) return <div>Failed to load</div>
//   if (!data) return <Loading />


  
//     return (
//        <div>
             
//           {data ? data.map((todo) => {return <h1 key={todo.id}>{todo.text}</h1>}) : <h1>bad</h1>}
//        </div>
//     )
return <h1>Hello</h1>
}

export async function getClient(context: NextPageContext) {
    
    
}