import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const MyModal = ({ bool, rb }) => {

    return (
        <>
            <Modal show={bool} onHide={rb}>
                <Modal.Header>
                    <Modal.Title>No Route Found</Modal.Title>
                </Modal.Header>
                <Modal.Body>Insufficient cylinders provided, please select appropriate values.</Modal.Body>
                <Modal.Footer>

                    <Button variant="success" onClick={rb}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModal;