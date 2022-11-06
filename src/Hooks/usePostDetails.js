import { useEffect, useState } from "react";

const usePostDetails = postId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    },[postId, data])
    return [data, setData] ;
}

export default usePostDetails;