import React from 'react'
import { useState } from 'react'
import ReactDom from 'react-dom'
import UserContext from '../../context/user'
import { updateProfileImg, removeProfileImg } from '../../services/userServices'

export default function FollowerModal({ open, user, onClose }) {
    const [profileImg, setProfileImg] = useState()

    if (!open) return null

    console.log(user);
    const removeImage = async () => {
        try {
            await removeProfileImg(user.username)
            window.location = `/user/${user.username}`
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        if (!e.target.files.length) return;

        let reader = new FileReader();
        // Convert the file to base64 text
        reader.readAsDataURL(e.target.files[0]);
        console.log(e.target.files[0]);
        // on reader load somthing...
        reader.onload = async () => {
            // Make a fileInfo Object
            const baseURL = reader.result;
            try {
                const updatedImg = await updateProfileImg(user.username, baseURL)
                console.log(updatedImg);
                window.location = `/user/${user.username}`
            } catch (error) {
                console.log(error);
            }

        }
    }

    return ReactDom.createPortal(
        <>
            <div className="modal-layout" onClick={onClose}></div>
            <div className="modal-box">
                <div className="modal-box__heading heading-black">Followers</div>
                <ul className="modal-box__list">
                    {user.followers.map((follower) => {
                        <label className="newpost__media">
                            <li className="modal-box__item">
                                {follower}
                                <input type="file" style={{ opacity: 0, position: "absolute", left: "-99999px" }} onChange={handleSubmit} />
                            </li>
                        </label>
                    })}

                    <li className="modal-box__item" onClick={onClose}>Cencel</li>
                </ul>
            </div>
        </>,
        document.getElementById("modal")
    )
}
