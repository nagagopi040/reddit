import React, { Component } from 'react';
import { PostModal } from "./post-modal"
import { Common } from '../utils';

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
        const { reddit_video } = this.props;
        const { fallback_url } = reddit_video;
        let newVideoUrl = Common.structureUrl(fallback_url);
        return (
            <div>
                <a href="javascript:void(0)" onClick={this.onClick}>
                    <video src={newVideoUrl} className="poster-image img-fluid" controls autoPlay />
                </a>
                <PostModal src={newVideoUrl} mediaType="video" onClick={this.onClick} modalOpen={this.state.modalOpen} />
            </div>
        );
    }
}
