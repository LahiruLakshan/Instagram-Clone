import React, { useState } from "react";
import InputEmojiWithRef from "react-input-emoji";
import Comment from "./Comment";
import {BASE_URL} from "../config";
import axios from "axios";
function PostCard(props) {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleOnEnter(text) {}

  const handleViewComments = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCommentPost = () => {
    console.log("text : ", text)
    if (text === "") {
      alert("Empty Comment!")
    } else {
      const data = new FormData();
      data.append('text_input', text);

      axios.post(`${BASE_URL}predict`, data)
          .then(response => {
            console.log("Response : ", response)
            alert(response?.data?.data)
          })
          .catch(error => {
            console.log("error : ", error)
          });
    }
  }

  return (
    <div className="post-card mx-4 w-40 mt-3">
      <div className="top-section p-2 d-flex align-items-center">
        <div className="profile">
          <img src={props.profilePicture} />
        </div>
        <div className="username">{props.username}</div>
        <div className="mx-2">•</div>
        <div>{props.time}</div>
        <div className="menu-dots-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png"
            className="menu-dots"
          />
        </div>
      </div>
      <div className="post-container">
        <img src={props.postImage} className="post" />
      </div>
      <div className="actions d-flex mt-2">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            className="action-icon pr-1"
          />
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3031/3031126.png"
            className="action-icon px-1"
          />
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
            className="action-icon px-1"
          />
        </div>
        <div className="ml-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
            className="action-icon px-1"
          />
        </div>
      </div>
      <div className="likes pr-2 py-2 fw-bold">199 Likes</div>
      <div>
        <div className="caption d-flex gap-2">
          <div className="username fw-bold">johndoe123</div>
          <div className="caption-text">Tag someone</div>
        </div>
        <div className="mt-1">
          <button
            className="btn "
            onClick={handleViewComments}
            style={{ padding: 0 }}
          >
            View all 12 comments
          </button>
        </div>
        <div className="d-flex justify-content-around align-items-baseline">
          <InputEmojiWithRef
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
            className="mr-0"
          />
          <div>
            <button className="btn fw-bold" onClick={handleCommentPost}>
              <span style={{ color: "rgb(0, 149, 246)" }}>Post</span>
            </button>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: "2px solid black" }} />

      {/* Bootstrap Modal */}
      <div
        className={`modal ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0 d-flex" style={{ maxWidth: "80vw" }}>
              <img src={props.postImage} className="post-display" />
              <div
                className="d-flex flex-column position-relative"
                style={{ width: "100%" }}
              >
                <div className="cross-icon">
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="top-section w-100 mt-2 mx-3 d-flex align-items-center">
                  <div className="profile me-sm-3">
                    <img src={props.profilePicture} />
                  </div>
                  <div className="fw-bold username">{props.username}</div>
                </div>
                <hr style={{ borderTop: "2px solid black", width: "100%", margin: "0.25rem 0" }} />
                <div className="comments">
                  <div className="top-section w-100 mx-3 d-flex align-items-center">
                    <div className="mr-1 profile me-sm-3">
                      <img src={props.profilePicture} />
                    </div>
                    <div className="fw-bold username me-sm-2">
                      {props.username}
                    </div>
                    <div className="caption-text">Comment 1</div>
                  </div>
                  <Comment
                    profilePicture="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
                    commentText="Comment Here"
                    username="Avi"
                  />
                  <Comment
                    profilePicture="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
                    commentText="Comment Here"
                    username="Avi"
                  />
                  <Comment
                      profilePicture="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
                      commentText="Comment Here"
                      username="Lahiru"
                  />


                </div>
                <div
                  className="position-absolute"
                  style={{ width: "100%", bottom: 0, backgroundColor: "white" }}
                >
                  <hr
                  className="mb-2"
                    style={{ borderTop: "2px solid black", margin: 0 }}
                  />
                  <div className="actions d-flex mx-2">
                    <div>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                        className="action-icon pr-1"
                      />
                    </div>
                    <div>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3031/3031126.png"
                        className="action-icon px-1"
                      />
                    </div>
                    <div>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
                        className="action-icon px-1"
                      />
                    </div>
                    <div className="ml-auto">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
                        className="action-icon px-1"
                      />
                    </div>
                  </div>
                  <div className="likes pr-2 mx-2 mt-2 fw-bold">199 Likes</div>
                  <hr
                    style={{ borderTop: "2px solid black", margin: "10px 0" }}
                  />
                  <div className="d-flex justify-content-around align-items-baseline">
                    <InputEmojiWithRef
                      value={text}
                      onChange={setText}
                      cleanOnEnter
                      onEnter={handleOnEnter}
                      placeholder="Type a message"
                    />
                    <div>
                      <button className="btn fw-bold">
                        <span style={{ color: "rgb(0, 149, 246)" }}>Post</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
