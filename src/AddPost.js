import { useState } from "react";
import { useHistory } from 'react-router-dom';
import './css/addpost.css';

const AddPost = () => {

    const [title,setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const history = useHistory();
    const submitPost = (evt) => {

        const createdOn = new Date();
        const post = { title, author, content, createdOn};
        
        fetch('http://localhost:8000/posts',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(
            (res) => {
                console.log(res.ok);
            }
        );

        alert('Post Created Successfully');
        history.push('/');

    };

    return ( 

    <div className="addPost">
        <h2>Add a New Post</h2>
        <form onSubmit={ submitPost }>
            <label>Title</label>
            <input type="text" value={title} onChange={ (e) => {setTitle(e.target.value)} } required/>
            
            <label>Content</label>
            <textarea value={content} onChange={ (e) => { setContent(e.target.value) } } required></textarea>
            
            <label>Author</label>
            <input type="text" value={author} required onChange={ (e) => { setAuthor(e.target.value) } } />
            <button>Add Post</button>
        </form>
    </div> );
}
 
export default AddPost;