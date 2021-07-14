import React from "react";

const Regular = ({ style }) => {
    const [first] = style;

    return (
        <div style={{ ...first }}>
            <h2>I am regular CSS</h2>
        </div>
    );
};

export default Regular;

