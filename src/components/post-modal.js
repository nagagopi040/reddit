import React, { Component } from 'react';
import { Modal, ModalBody, Card, ModalHeader } from "reactstrap";

// Modal Popup for Post
export class PostModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalOpen: false
        }
    }

    // function to toggle modal popup
    onClick = () => {
        this.setState( prevState => ({
            modalOpen: !prevState.modalOpen
        }))
    }

    render() {
        const { mediaType, src, modalOpen } = this.props;
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
