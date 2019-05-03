import React from 'react';

const Errors = (props) => {
    if (props.session.length > 0) {
        return (
            <div id="errors-div">
                { props.session[0] }
            </div>
        )
    } else {
        return (
            <div id="errors-div-blank">
            </div>
        )
    }
};

export default Errors;