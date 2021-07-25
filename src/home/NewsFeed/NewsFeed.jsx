import React from 'react';
import { PreviewCard } from '../PreviewCard'
import './NewsFeed.css';

export const NewsFeed = ({submissions}) => (
  <div className="feed">
    {submissions.map(submission => <PreviewCard key={submission._id} {...submission} />)}
  </div>
)
