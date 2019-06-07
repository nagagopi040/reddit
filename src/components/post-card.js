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

    render() {
        const { postData } = this.state;
        const { title, ups, secure_media, author, author_flair_text, preview, num_comments } = postData;
        return (
            <Card className="my-4">
                <Row>
                    <Col className="col-3 col-md-2">
                        <CardBody className="d-flex flex-column justify-content-center align-items-center">
                            <CardLink className="upvote" href="javaScript:void(0);">&#x27A7;</CardLink>
                            <CardTitle className="upcount font-weight-bold">{Common.convertNumber(ups)}</CardTitle>
                            <CardLink className="downvote" href="JavaScript:Void(0);">&#x27A7;</CardLink>
                        </CardBody>
                    </Col>
                    <Col className="col-9 col-md-10">
                        <CardBody>
                            <AuthorInfo author={author} author_flair_text={author_flair_text} />
                            <CardTitle className="post-title font-weight-bold">{title}</CardTitle>
                            {!(secure_media && secure_media.oembed) && preview && <PosterImage images={preview.images[0]} />}
                            {secure_media && secure_media.oembed && <PosterImage images={secure_media.oembed} />}
                            {secure_media && secure_media.reddit_video && <PosterVideo reddit_video={secure_media.reddit_video} />}
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        );
    }
}
