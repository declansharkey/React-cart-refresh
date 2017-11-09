import React from 'react';

const Title = (props) => {

    return(
        <div className="title">
            <div className="steps">Step 1 of 3</div>
            <h1 className="main-title">{props.page}</h1>
        </div>
    )
}

export default Title;