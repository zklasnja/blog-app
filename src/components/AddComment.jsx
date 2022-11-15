import React from "react";

export default function AddComment({ newComment, setNewComment, onAddComment }) {
    return (
        <div>
            <form onSubmit={onAddComment}>
                <input
                    required
                    type="text"
                    className="input-text"
                    placeholder="Comment"
                    value={newComment && newComment.text}
                    onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                />
                <button className="btn btn-blue" type="submit">Submit</button>
            </form>
        </div>
    )
}