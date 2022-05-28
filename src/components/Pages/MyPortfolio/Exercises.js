import React from 'react';

function iframe() {
    return {
        __html: '<iframe src="portfolio/slider.html" width="100%" height="870px" frameBorder="0" scrolling="no" className="frame"></iframe>'
    }
}
const Exercises = () => {
    
    return (
        <div>
            <div dangerouslySetInnerHTML={iframe()} />
        </div>)
};

export default Exercises;