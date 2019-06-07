import React, { Component } from 'react';
import { PostModal } from "./post-modal";
import { Common } from "./../utils";

export class PosterImage extends Component {
    constructor(props){
        super(props);

        this.state = {
            newImageUrl: "",
            image: {},
            source: {},
            modalOpen: false
        }
    }
    componentDidMount(){
        const { images } = this.props;
        const { resolutions, source } = images;
        let len = resolutions && resolutions.length-1;
        if(len > 0){
            let image =  resolutions[len];
            let newImageUrl = Common.structureUrl(image.url);
            this.setState({
                newImageUrl,
                image,
                source
            })
        }
    }

    onClick = () => {
        this.setState( prevState => ({
            modalOpen: !prevState.modalOpen
        }))
    }

    render() {
        const { newImageUrl, modalOpen } = this.state;
        const { thumbnail_url, type } = this.props.images;
        return (
            <div>
                <a href="javascript:void(0)" onClick={this.onClick}>
                    <img src={type==="video" ? thumbnail_url : newImageUrl} className="poster-image img-fluid" />
                </a>
                <PostModal src={newImageUrl} mediaType="image" onClick={this.onClick} modalOpen={modalOpen} />
            </div>
        );
    }
}
