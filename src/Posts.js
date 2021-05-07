import { Link } from 'react-router-dom';
import humanized_time_span from './humanize_timestamp';
import './css/posts.css';

const Posts = ({posts}) => {
    
    return ( 
        <div className="posts">
            <h2>All Posts</h2>
            { posts.map(
                post => (
                    <div className="post-preview" key={ post.id } >
                        <Link to={ `/posts/${post.id}` }>
                            <h3>{ post.title } </h3>
                            <p align="left"><b>Written By:</b> { post.author } </p> 
                            <p align="left"><b>Created:</b> { humanized_time_span(post.createdOn) }</p>
                        </Link>
                    </div>
                          
                    )
                )
             }
        </div>
    );
}
 
export default Posts;

