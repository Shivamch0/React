import { usePostsStore } from "../store/postStore"
import { useEffect } from "react"

function Posts() {
    const {posts , loading , error , fetchPosts} = usePostsStore();

    useEffect(() => {
        fetchPosts()
    } , [fetchPosts])

    if(loading) return <p>Loading</p>
    if(error) return <p>Error</p>
  return (
    <ul>
        {posts.map((p) => (
            <li key={p.id}>{p.title}</li>
        ))}
    </ul>
  )
}

export default Posts