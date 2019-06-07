import React, { Component } from 'react';

export class Loader extends Component {
    render() {
        return (
            <div className="d-flex flex-row justify-content-center">
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loader" />
            </div>
        );
    }
}
