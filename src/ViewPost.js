import {useParams} from 'react-router-dom';
import useFetch from "./useFetch";
import './css/viewpost.css';

const ViewPost = () => {
    
    
    const {id:postId} = useParams();
    console.log("POST ID: "+postId);
    const { posts:post, isPending, error } = useFetch("http://localhost:8000/posts/"+postId);
    console.log("Post: "+ JSON.stringify(post));
    if (post) {
        var obj = new Date(post.createdOn);
    }
    
    return ( 
        <div className="viewPost">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {
            post &&  
               ( 
                <article>
                    <h2>{ post.title } </h2>
                    <p align="left"><b>Written By:</b> { post.author }</p> 
                    <p align="right"><b>Created On:</b> { obj.toLocaleDateString() } </p>
                    
                    { post.content }
               </article>)
            }
        </div>
     );
}
 
export default ViewPost;