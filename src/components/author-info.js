import React, { Component } from 'react';
import { CardTitle, CardText } from "reactstrap";

export class AuthorInfo extends Component {
    render() {
        const { author, author_flair_text,  } =this.props;
        return (
            <CardTitle className="d-flex flex-row">
                posted by u/{author}
                {author_flair_text && <span className="flair-text">{author_flair_text}</span>}
            </CardTitle>
        );
    }
}