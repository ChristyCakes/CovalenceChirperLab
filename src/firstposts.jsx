import React from 'react';
import './App.css';

// create some sample posts to show when page loads
const Firstposts = props => {
    return (
        <div className="firstposts">
            <h3>Wed Dec 25 2017 13:22:54 GMT-0700 (Pacific Daylight Time)</h3>
            <h4>This is my first Chirp ever! Merry Christmas to all!</h4>
            <h3>Fri Mar 17 2018 09:22:54 GMT-0700 (Pacific Daylight Time)</h3>
            <h4>Still laughing from the new 'Silicon Valley' episode last night </h4>
            <h3>Fri Jul 7 2018 16:22:54 GMT-0700 (Pacific Daylight Time)</h3>
            <h4>Happy Friyay everyone! Headed to the lake for the weekend</h4>
        </div>      
    )
}
export default Firstposts;