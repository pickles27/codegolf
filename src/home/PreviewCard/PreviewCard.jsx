import React from 'react';
import './PreviewCard.css';

export const PreviewCard = ({
    author,
    prompt,
    title,
}) => <div className="card">
    <h1>{title}</h1>
    <h4>{author}</h4>
    <p>{prompt}</p>
    <button>Challenge</button>
</div>;
