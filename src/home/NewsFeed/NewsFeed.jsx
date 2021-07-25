import React from 'react';
import { PreviewCard } from '../PreviewCard'

export const NewsFeed = ({submissions}) => (
  <div>
    {submissions.map(submission => <PreviewCard key={submission._id} {...submission} />)}
  </div>
)
