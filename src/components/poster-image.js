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
        const { thumbnail_url, type, source } = this.props.images;
        return (
            <div>
                {/* Method to Render Gif and Image*/}
                <a href="javascript:void(0)" onClick={this.onClick}>
                    <img src={type==="video" ? thumbnail_url : Common.structureUrl(source.url)} className="poster-image img-fluid" />
                </a>
                <PostModal src={type==="video" ? thumbnail_url : Common.structureUrl(source.url)} mediaType="image" onClick={this.onClick} modalOpen={modalOpen} />
            </div>
        );
    }
}
