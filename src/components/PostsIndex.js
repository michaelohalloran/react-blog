import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class PostsIndex extends Component {

    componentDidMount() {
        //this fetches all posts and puts them into state on page load, so we 
        //can use them down below
        this.props.fetchPosts();
        // console.log(this.props.posts);
       
    }

    renderPosts() {
        return _.map(this.props.posts, post=> {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        });
    }

    render() {
        
        console.log(this.props.posts);
        // const posts = this.props.posts.map(post=>(
        //     <li>{post}</li>
        // ));

        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts Index</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({posts}) => ({
    posts
});

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);