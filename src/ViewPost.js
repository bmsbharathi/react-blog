import {useParams} from 'react-router-dom';
import useFetch from "./useFetch";

const ViewPost = () => {
    
    
    const {id:postId} = useParams();
    console.log("POST ID: "+postId);
    const { posts:post, isPending, error } = useFetch("http://localhost:8000/posts/"+postId);
    console.log("Post: "+ JSON.stringify(post));
    return ( 
        <div className="viewPost">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {
            post &&  
               ( 
                <article>
               <h2>{ post.title } </h2>
                <p align="left">Written By { post.author }</p> 
                <p align="right">Created On: { post.createdOn } </p>
               { post.content }</article>)
            }
        </div>
     );
}
 
export default ViewPost;