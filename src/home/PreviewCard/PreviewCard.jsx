import React from 'react';
import './PreviewCard.css';
import { Button } from '../../components/Button'

export const PreviewCard = ({
    author,
    prompt,
    title,
}) => {

const handleChallenge = () => {
    //go to challenge submission page
}

return <div className="card">
    <h1>{title}</h1>
    <h4>{author}</h4>
    <p>{prompt}</p>
    <Button onClick={handleChallenge}>Challenge</Button>
</div>};

