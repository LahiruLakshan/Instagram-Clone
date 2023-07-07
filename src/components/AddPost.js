import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import InputEmojiWithRef from "react-input-emoji";

const AddPost = () => {
  const [text, setText] = useState("");
  
  function handleOnEnter(text) {
    // Handle on enter logic here
  }
  
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPhoto(null)
    setUploadProgress(0)
  };

  const handlePhotoChange = (event) => {
    setSelectedPhoto(event.target.files[0]);
  };

  const handlePhotoUpload = () => {
    // Simulating photo upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress = Math.min(progress + 10, 100);
      setUploadProgress(progress);

      if (progress === 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here

    // Close the modal after submitting the form
    handleCloseModal();
  };

  return (
    <div>
      <Button variant="primary" className="mt-2" onClick={handleOpenModal}>
        Create Post
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ maxWidth: "60vw", margin: "auto" }}>
          <Form onSubmit={handleSubmit} className="d-flex flex-column">
            <Row>
              <Col>
                <Form.Group controlId="photo">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control type="file" onChange={handlePhotoChange} />
                </Form.Group>
                {selectedPhoto && (
                  <div>
                    <p>Uploading: {uploadProgress}%</p>
                    <img
                      src={URL.createObjectURL(selectedPhoto)}
                      alt="Preview"
                      style={{ width: "-webkit-fill-available", maxWidth: "500px", maxHeight: "500px" }}
                    />
                  </div>
                )}
              </Col>
              <Col>
                <Form.Group controlId="caption" className="input-with-emoji">
                  <Form.Label>Caption</Form.Label>
                  <InputEmojiWithRef
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="Enter caption..."
                  />
                </Form.Group>
                <Form.Group controlId="caption">
                  <Form.Label>Tags</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter tags" style={{resize: "none"}}/>
                  </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" className="mt-2" type="submit" style={{width: "40%"}}>
              Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddPost;
