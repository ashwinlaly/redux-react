import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <br/>
            <Link to="posts">Posts</Link>
        </div>
    )
}
export default Dashboard;