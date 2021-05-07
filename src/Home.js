import useFetch from './useFetch'
import Posts from './Posts'
const Home = () => {
    
    const { posts, isPending, error } = useFetch('http://localhost:8000/posts');

    if (posts) {
        posts.sort( (object1, object2)  => {
            return ( object1.createdOn > object2.createdOn )? -1 : 1;
        });
    }
    

    return ( 
    <div>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { posts && <Posts posts={posts} /> }
    </div> 
    
    );
}
 
export default Home;