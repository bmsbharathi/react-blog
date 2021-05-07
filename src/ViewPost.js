import {useParams} from 'react-router-dom';
import useFetch from "./useFetch";
import deleteIcon from './images/delete-button.png';
import { useHistory } from 'react-router';
import './css/viewpost.css';

const ViewPost = () => {
    
    
    const {id:postId} = useParams();
    console.log("POST ID: "+postId);
    const { posts:post, isPending, error } = useFetch("http://localhost:8000/posts/"+postId);
    const history = useHistory();
    
    // Try inline style for delete button
    const deleteButtonStyle = {

        borderRadius: 8,
        cursor: "pointer",
        height:40,
        width: 40,
        borderStyle: "none",
        margin: 50

    } 


    const deletePost = () => {

        fetch('http://localhost:8000/posts/'+postId,{
            method: 'DELETE'
        })
        .then(
            () => {
                console.log('Post Deleted!');
                history.push('/');
            }
        );
    }

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
                    <p align="left"><b>Created On:</b> { obj.toLocaleDateString() } </p>
                    <p>{ post.content }</p>
                    <div>
                        <img onClick={ deletePost } style={ deleteButtonStyle } src={ deleteIcon } alt="delete button" />
                    </div>
                </article>
                )
            }
        </div>
     );
}
 
export default ViewPost;