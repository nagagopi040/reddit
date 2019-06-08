import React, { Component } from 'react';
import { PostModal } from "./post-modal";
import { Common } from "./../utils";

export class PosterImage extends Component {
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
        const { modalOpen } = this.state;
        const { src } = this.props;
        return (
            <div>
                {/* Method to Render Gif and Image*/}
                <a href="javascript:void(0)" onClick={this.onClick}>
                    <img src={src} className="poster-image img-fluid" />
                </a>
                <PostModal src={src} mediaType="image" onClick={this.onClick} modalOpen={modalOpen} />
            </div>
        );
    }
}
