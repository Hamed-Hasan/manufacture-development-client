import React from 'react';

function iframe() {
    return {
        __html: '<iframe src="notfound/slider.html" width="100%" height="800px" frameBorder="0" scrolling="no" className="frame"></iframe>'
    }
}
const Exercises = () => {
    
    return (
        <div>
            <div dangerouslySetInnerHTML={iframe()} />
        </div>)
};

export default Exercises;