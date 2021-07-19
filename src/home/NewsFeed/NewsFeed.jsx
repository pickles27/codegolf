import React from 'react';
import { PreviewCard } from '../PreviewCard'

export const NewsFeed = ({submissions}) => submissions.map(submission => <PreviewCard {...submission} />);
