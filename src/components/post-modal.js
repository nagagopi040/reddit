import React, { Component } from 'react';
import { Modal, ModalBody, Card, ModalHeader, Button } from "reactstrap";

export class PostModal extends Component {
    render() {
        const { modalOpen, mediaType, src } = this.props;
        return (
            <Modal size="lg" isOpen={modalOpen} toggle={() => this.props.onClick()} >
                <ModalHeader className="border-0 py-0" toggle={() => this.props.onClick()} />
                <ModalBody>
                    <Card className="border-0 modal-post">
                        {mediaType === "image" && <img src={src} alt="modal-image" />}
                        {mediaType === "video" && <video controls autoPlay src={src} alt="modal-video" />}
                   </Card>
                </ModalBody>
            </Modal>
        );
    }
}
