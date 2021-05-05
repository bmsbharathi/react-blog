import { Link } from 'react-router-dom'

const Posts = ({posts}) => {
    
    return ( 
        <div className="posts">
            { posts.map(
                post => (
                    <div className="post-preview" key={ post.id } >
                        <Link to={ `/posts/${post.id}` }>
                            <h2>{ post.title } </h2>
                            <p align="left">Written By: { post.author } </p>
                            <p align="right">Created On: { post.createdOn }</p>
                        </Link>
                    </div>
                    )
                )
             }
        </div>
    );
}
 
export default Posts;
