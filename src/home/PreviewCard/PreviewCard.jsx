import React from 'react';
import './PreviewCard.css';

export const PreviewCard = ({
    author,
    prompt,
    title,
}) => <div className="card">
    <h1>{title}</h1>
    <h2>{author}</h2>
    <p className="truncate">{prompt}</p>
    <button>Challenge</button>
</div>;
