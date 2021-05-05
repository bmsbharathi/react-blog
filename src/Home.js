import useFetch from './useFetch'
import Posts from './Posts'
const Home = () => {
    
    const { posts, isPending, error } = useFetch('http://localhost:8000/posts');
    
    return ( 
    <div>HOME
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { posts && <Posts posts={posts} /> }
        
    </div> 
    
    );
}
 
export default Home;