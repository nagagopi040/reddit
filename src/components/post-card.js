import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardLink, CardText } from "reactstrap";

import { AuthorInfo, PosterImage, PosterVideo } from './../components';
import { Common } from "./../utils";

export class PostCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            postData: {}
        }
    }

    componentDidMount(){
        const { postData } = this.props;
        this.setState({
            postData: postData && postData.data ? postData.data : {}
        })
    }


    // method for diffrentiating between the post
    renderPoster = (secure_media, preview) => {
        if(secure_media){
            let { reddit_video, oembed } = secure_media;
            if(reddit_video){
                let url = reddit_video.fallback_url  ? Common.structureUrl(reddit_video.fallback_url) : "";
                return  <PosterVideo src={url} mediaType="video" />
            }
            if(oembed) {
                let url = oembed.thumbnail_url ? Common.structureUrl(oembed.thumbnail_url) : "";
                return <PosterImage src={url} mediaType="image" />
            }
        } else if(preview) {
            let image = preview && preview.images && preview.images[0].source ? preview.images[0].source : {};
            let url = image.url  ? Common.structureUrl(image.url) : "";
            return <PosterImage src={url} mediaType="image" />
        }
        return null;
    }

    render() {
        const { postData } = this.state;
        const { title, ups, secure_media, author, author_flair_text, preview, num_comments } = postData;
        return (
            <Card className="my-4">
                <Row>
                    { /*Render Method for Votes */}
                    <Col className="col-2 col-md-1">
                        <CardBody className="d-flex flex-column justify-content-center align-items-center mx-1">
                            <CardLink className="upvote" href="javaScript:void(0);">&#x27A7;</CardLink>
                            <CardTitle className="upcount font-weight-bold">{Common.convertNumber(ups)}</CardTitle>
                            <CardLink className="downvote" href="javaScript:void(0);">&#x27A7;</CardLink>
                        </CardBody>
                    </Col>
                    { /*Render Method for content */}
                    <Col className="col-10 col-md-11">
                        <CardBody>
                            <AuthorInfo author={author} author_flair_text={author_flair_text} />
                            <CardTitle className="post-title font-weight-bold">{title}</CardTitle>
                            {this.renderPoster(secure_media, preview)}
                            {num_comments >0 && <CardText>{num_comments} Comments</CardText>}
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        );
    }
}
