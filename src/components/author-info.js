import React, { Component } from 'react';
import { CardTitle } from "reactstrap";

// Component for rendering Author Info
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