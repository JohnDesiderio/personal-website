import React from 'react';
import Project from '../project-component';
import { IProject } from '../types';

const name = 'Social Media Demo';
const details: Array<string> = [
  "Built a social media web demo that allows users to create an account and post thoughts and to like and revalidate other users' thoughts",
  "Engineered the front end of the application using React and Typescript to ensure a smooth user experience",
  "Implemented the Node framework NestJS to manage the back end of the application",
  "Utilized the JWT Authentication strategy to protect back-end endpoints and limit accessibility to authorized, registered users",
  "Managed all the data that users submitted with the online cloud storage MongoDB",
  "Added email verification and reset password flows to ensure users don't end up locked out of their account",
]

const SocialMediaDemo: React.FC<{}> = () => {
  const props: IProject = {
    name: name,
    details: details,
    sh: 'spotify-mixer',
  }

  return (<Project {...props} />);
}

export default SocialMediaDemo;
