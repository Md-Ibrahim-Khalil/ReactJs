import React from 'react';

// import { dumpLogs } from './Utils';
// import './BlogCard.css';

import classes from './BlogCard.module.css';

class BlogCard extends React.Component {
   
    // onLikeBtnClick = () => {
    //     this.setState((prevState, prevProp) => {
    //         return {likeCount: prevState.likeCount + 1};
    //     });
    // } 

    componentWillUnmount() {
        console.log('UnMounting BlogCards')
    }



    render() {
        console.log('BlogCard Rendered');

        // dumpLogs(props);
        return (
            <div className={classes.NewBlogCard}>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>

                <p>Like Count: <span className={classes.likeCount}>{this.props.likeCount}</span></p>
                <button onClick={this.props.onLikeBtnClick}>Like</button>
            </div>
        )
    }
 
    
}

export default BlogCard;