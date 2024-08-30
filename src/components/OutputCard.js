import React from 'react';

function OutputCard({ title, number }) {
    return (
        <div className="output-card">
            <h3 className="output-title">{title}</h3>
            <div className="output-number">{number}</div>
        </div>
    );
}

export default OutputCard;
