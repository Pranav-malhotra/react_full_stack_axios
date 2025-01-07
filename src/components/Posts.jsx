import { useEffect, useState } from "react";
import { getPost } from "../api/PostAPI";
import "../App.css";

export const Posts = () => {

    const[data, setData]= useState([]);

    const getPostData = async () => {
        const res = await getPost();
        setData(res.data);
      };
    
      useEffect(()=> {
        getPostData();
      },[]);

  return (
  <section className="section-post">
    <ol>
        {
            data.map((curEle)=>{
                const {id, body, title}= curEle;
                return <li key={id}>
                    <p>Title: {title}</p>
                    <p>Body: {body}</p>
                    <button>Edit</button>
                    <button className="btn-delete">Delete</button>
                </li>

            })
        }
    </ol>
  </section>
  )
}

