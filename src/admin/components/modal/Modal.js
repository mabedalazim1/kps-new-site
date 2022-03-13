import { Button, Modal } from "react-bootstrap";

import React, { useState } from 'react';
import './modal.css'
const DeleteModal = ({ handelDelete, name }) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="danger" onClick={handleShow}>
        حذف
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title> حذف عنصر</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>سوف يتم حذف: </p>
            <p className="modal-sub-title">&nbsp; { name} </p>

        </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" onClick={handelDelete}>
           حذف
            </Button>
            
          <Button variant="primary" onClick={handleClose}>
            إلغاء
          </Button>
         
        </Modal.Footer>
      </Modal>
        </>
    );
}

export default DeleteModal;
