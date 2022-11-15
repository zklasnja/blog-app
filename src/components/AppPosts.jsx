import React from 'react';
import { Link } from 'react-router-dom';

export default function AppPosts({ posts, onEditPost, onDeletePost }) {
    return (
        <div>
            <ul>
                {posts && posts.map((post) =>
                    <li key={post.id}>
                        <strong>Title: </strong>{post.title} <Link to={`/post/${post.id}`}>View Post</Link>
                        <strong>Number of Comments: {post.comments.length}</strong>
                        <button className="btn btn-blue" onClick={() => onEditPost(post.id)}>Edit</button>
                        <button className="btn btn-blue" onClick={() => onDeletePost(post.id)}>Delete</button>
                    </li>)}
            </ul>
        </div>
    )
}