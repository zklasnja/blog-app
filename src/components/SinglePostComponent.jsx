import React from "react";
import { Link } from "react-router-dom";

export default function SinglePostComponent({ post, comments, formattedDate, onDeleteComment, onEditComment, commentAlert, onDeleteAllComments }) {
    return (
        <div>
            <h2>{post && post.title}</h2>
            <p>Created at: {formattedDate}</p>
            <p>{post && post.text}</p>
            <hr />
            Comments:
            <ul>
                {!!comments?.length && <button className="btn btn-blue" onClick={() => onDeleteAllComments()}>Delete</button>}
                {comments && comments.map((comment) =>
                    <li key={comment.id}>
                        <Link to="" onClick={() => commentAlert(comment.id)}>{comment.text}</Link>
                        <button className="btn btn-blue" onClick={() => onDeleteComment(comment.id)}>Delete</button>
                        <button className="btn btn-blue" onClick={() => onEditComment(comment.id)}>Edit</button>
                    </li>
                )}
            </ul>
            <hr />
        </div>
    )
}