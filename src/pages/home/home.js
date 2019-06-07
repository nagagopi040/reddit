import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import { getReddits } from "./actions"
import { PostCard, Loader } from "./../../components";

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false
        }
    }

    // Fetch Method for fetching Subreddits data
    componentDidMount() {
        let { subreddit } = this.props.match.params;
        this.setState({isLoading: true})
        fetch(`https://www.reddit.com/r/${subreddit ? subreddit: "all"}.json`)
            .then( res => res.json())
            .then( response => {
                const data = response.data ? response.data : [];
                this.props.getReddits(data);
                this.setState({isLoading: false})
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
                {
                    this.state.isLoading &&  <Loader />
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