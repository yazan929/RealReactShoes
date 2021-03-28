import React, { useState } from "react";
import "./post.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Post = ({ post }) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className="insideNewShoes">
                <img src={post.photo} onClick={toggleModal}></img>
            </div>
            <div className="theModal">
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    // contentLabel="My dialog"
                >
                    <div>My modal dialog.</div>
                    <button onClick={toggleModal}>Close</button>
                </Modal>
            </div>
        </div>
    );
};

export default Post;
