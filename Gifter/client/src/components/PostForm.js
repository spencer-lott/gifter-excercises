import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {addPost} from "../APIManagers/PostManager"

export const PostForm = () => {
    const navigate = useNavigate()
    const [post, update] = useState({
        title: "",
        imageUrl: "",
        caption: "",
        userProfileId: 1,
        dateCreated: Date.now()
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const postToSendToAPI = {
            Title: post.title,
            ImageUrl: post.imageUrl,
            Caption: post.caption,
            DateCreated: new Date().toISOString(),
            UserProfileId: 1
        }

        return addPost(postToSendToAPI).then(navigate("/"))
    }

    return (
        <div>
            <form className="postForm">
                <h2 className="postForm">New Post</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" className="form-control"
                            value={
                                post.title
                            }
                            onChange={
                                (event) => {
                                    const copy = {
                                        ...post
                                    }
                                    copy.title = event.target.value
                                    update(copy)
                                }
                            }/>
                    </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image</label>
                    <input id="imageUrl" type="text" className="form-control"
                        value={
                            post.imageUrl
                        }
                        onChange={
                            (event) => {
                                const copy = {
                                    ...post
                                }
                                copy.imageUrl = event.target.value
                                update(copy)
                            }
                        }/>
                </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="caption">Caption</label>
                <input id="caption" type="text" className="form-control"
                    value={
                        post.caption
                    }
                    onChange={
                        (event) => {
                            const copy = {
                                ...post
                            }
                            copy.caption = event.target.value
                            update(copy)
                        }
                    }/>
            </div>
    </fieldset>

    <button className="btn btn-primary"
        onClick={
            (clickEvent) => handleSaveButtonClick(clickEvent)
    }>
        Submit Post</button>
</form></div>
    )


}
