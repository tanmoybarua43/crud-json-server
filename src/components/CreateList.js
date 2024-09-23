import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function CreateList({ createPost }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    createPost({ title, author });
    setTitle('');
    setAuthor('');
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New List Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateList;
