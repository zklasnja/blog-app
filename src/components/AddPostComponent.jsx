export default function AddPostComponent({onAddPost, newPost, setNewPost, handleResetForm}) {
    return (
        <div>
            <form onSubmit={onAddPost}>
                <input
                    required
                    type="text"
                    className="input-text"
                    placeholder="Title"
                    minLength="2"
                    value={newPost && newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
                <textarea
                    required
                    type="text"
                    className="input-text"
                    value={newPost && newPost.text}
                    placeholder="Blog Text"
                    rows="6"
                    maxLength="300"
                    onChange={(e) => setNewPost({ ...newPost, text: e.target.value })} />
                    <button type="submit">Submit</button>
                    <button className="btn btn-blue" onClick={handleResetForm} type="button">Reset Form</button>
            </form>
        </div>
    )
}