import React, { Component } from 'react';
import { PostModal } from "./post-modal"

export class PosterVideo extends Component {
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
        const { src } = this.props;
        return (
            <div>
                <a href="javascript:void(0)" onClick={this.onClick}>
                    <video src={src} className="poster-image img-fluid" controls autoPlay />
                </a>
                <PostModal src={src} mediaType="video" onClick={this.onClick} modalOpen={this.state.modalOpen} />
            </div>
        );
    }
}
