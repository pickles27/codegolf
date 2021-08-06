import React from 'react';
import { PreviewCard } from '../PreviewCard'
import './NewsFeed.css';
import { mockSubmissions } from '../../mockData';

export const NewsFeed = () => {
  //would fetch submissions here
  const submissions = mockSubmissions;
  return <div className="feed">
    {submissions.map(submission => <PreviewCard key={submission._id} {...submission} />)}
  </div>;
}
