import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../action/postActions';
import Post from './Post';

const PostPage = ({dispatch, loading, posts, hasError}) => {
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    
    const renderPosts = () => {
        if(loading) return <p>Loading...</p>
        if(hasError) return <p>has Error</p>
        return posts.map(data => <Post key={data.id} post={data} />)
    }

    return (
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}

const mapStateToProps = (state) => ({
    loading : state.posts.loading,
    posts : state.posts.posts,
    hasError : state.posts.hasError
})

export default connect(mapStateToProps)(PostPage)