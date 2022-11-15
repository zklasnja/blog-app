import React, { useState, useEffect } from 'react';
import AddPostComponent from "../components/AddPostComponent";
import PostsService from '../services/PostService';
import { useParams, useHistory } from 'react-router-dom';

export default function AddPost() {
    const history = useHistory();
    let  { id } = useParams();

    const [newPost, setNewPost] = useState({
        title: "",
        text: ""
    });

    const onAddPost = (e) => {
        e.preventDefault();

        const handleAddPost = async () => {
            await PostsService.add(newPost);
        }
        if (handleAddPost) {
            handleAddPost();
            history.push('/posts');
        }
    }

    const handleResetForm = () => {
        setNewPost({
            title: "",
            text: ""
        })
    }

    const onEditPost = (e) => {
        e.preventDefault();
        
        const handleEditPost = async () => {
            await PostsService.edit(id, newPost);
        }
        if (handleEditPost) {
            handleEditPost();
            history.push('/posts');
        }
    }

    const handleGetSinglePost = async (id) => {
        if (id) {
            const response = await PostsService.get(id);
            setNewPost(response);
        }
    }
    
    useEffect(() => {
        if (id) {
            handleGetSinglePost(id)
        }
    }, []);

    return (
        <div>
            <AddPostComponent
                onAddPost={id ? onEditPost : onAddPost}
                newPost={newPost}
                setNewPost={setNewPost}
                handleResetForm={handleResetForm}
            />
        </div>
    )
}