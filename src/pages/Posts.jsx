import React, { useState, useEffect } from "react";
import AppPosts from "../components/AppPosts";
import PostsService from "../services/PostService";
import { useHistory } from "react-router-dom";

export default function Posts() {
    const history = useHistory();
    const [posts, setPosts] = useState();

    const handleGetPosts = async () => {
        const posts = await PostsService.getAll();
        setPosts(posts);
    };
    
    useEffect(() => {
        handleGetPosts()
    }, []);
    
    const handleEditPost = (id) => {
        history.push(`/edit/${id}`);
    }
    
    const handleDeletePost = async (id) => {
        const choice = window.confirm("Are you sure you want to delete this car?");
        if (!choice) return;
        await PostsService.delete(id);
        
        const posts = await PostsService.getAll();
        setPosts(posts);
    }
    
    return (
        <div>
            <AppPosts
                posts={posts}
                onEditPost={handleEditPost}
                onDeletePost={handleDeletePost}
            />
        </div>
    )
}