import React, { useState, useEffect } from "react";
import PostsService from "../services/PostService";
import SinglePostComponent from "../components/SinglePostComponent";
import { useHistory, useParams } from 'react-router-dom';
import AddComment from "../components/AddComment";
import useFormattedDate from '../hooks/useFormattedDate';

export default function SinglePost() {
    const history = useHistory();
    let { id } = useParams();

    const [post, setSinglePost] = useState();
    const [comments, setComment] = useState();
    const [newComment, setNewComment] = useState({
        text: ""
    });
    const [newCommentId, setNewCommentId] = useState();
    const [commentCount, setCommentCount] = useState(0);

    const formattedDate = useFormattedDate(post ? post.createdAt : '');

    const handleGetSinglePost = async (id) => {
        if (id) {
            const response = await PostsService.get(id);
            setSinglePost(response);
            setComment(response.comments)
            onCommentsCount();
        }
    }

    useEffect(() => {
        if (id) {
            handleGetSinglePost(id);
        }
    }, []);

    const onAddComment = async (e) => {
        e.preventDefault();

        const handleAddComment = async () => {
            await PostsService.addComment(id, newComment);
        }
        if (handleAddComment) {
            handleAddComment();
            const response = await PostsService.get(id);
            setComment(response.comments)
            setNewComment({...newComment, text: ""});
        }
    }

    const onDeleteComment = async (commentId) => {
        const response = await PostsService.deleteComment(id, commentId);

        if (response) {
            setComment(comments.filter((comment) => comment.id !== commentId))
        }
    }

    const onEditComment = async (commentId) => {
        const commentData = await PostsService.getComment(id, commentId)
        setNewComment({...newComment, text: commentData.text})
        setNewCommentId(commentId);
    }
    
    const handleEditComment = (e) => {
        e.preventDefault();

        const handleEditedComment = async () => {
            await PostsService.editComment(id, newCommentId, newComment);
            const response = await PostsService.get(id);
            setComment(response.comments)
            setNewComment("");
            setNewCommentId("");
        }

        if (handleEditedComment) {
            handleEditedComment();
            history.push(`${id}`)
        }

    }


    const handleCommentAlert = async (commentId) => {
        const commentData = await PostsService.getComment(id, commentId)

        alert(JSON.stringify(commentData));
        history.push(`post/${id}`)
    }

    const handleDeleteAllComments = async () => {
        const response = await PostsService.deleteAllComments(id);
        setComment()
    }

    const onCommentsCount = async () => {
        const response = await PostsService.getCommentsCount(id)
        setCommentCount(response.data.count);
    }

    return (
        <div>
            <SinglePostComponent
                post={post}
                comments={comments}
                formattedDate={formattedDate}
                onDeleteComment={onDeleteComment}
                onEditComment={onEditComment}
                commentAlert={handleCommentAlert}
                onDeleteAllComments={handleDeleteAllComments}
                commentCount={commentCount}
            />
            <AddComment
                newComment={newComment}
                setNewComment={setNewComment}
                onAddComment={newCommentId ? handleEditComment : onAddComment}
            />
        </div>
    )
}