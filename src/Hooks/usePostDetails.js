import { useEffect, useState } from "react";

const usePostDetails = postId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `https://nameless-river-47121.herokuapp.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
    },[postId, data])
    return [data, setData] ;
}

export default usePostDetails;