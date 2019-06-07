import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import { getReddits } from "./actions"
import { PostCard } from "./../../components";

class HomePage extends Component {
    componentDidMount() {
        let { subreddit } = this.props.match.params;
        fetch(`https://www.reddit.com/r/${subreddit ? subreddit: "all"}.json`)
            .then( res => res.json())
            .then( response => {
                const data = response.data ? response.data : [];
                this.props.getReddits(data);
            })
    }

    render() {
        const { subredditsData }  = this.props;
        const data = subredditsData ? subredditsData : [];            
        return (
            <div>
                {
                    data && data.children && data.children.length > 0  && data.children.map( post => {
                        return (
                            <PostCard postData={post}  key={post.data.id}/>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    subredditsData : state.homeReducer.subredditsData
})

const mapDispatchToProps = dispatch => ({
    getReddits: bindActionCreators(getReddits, dispatch),
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage)