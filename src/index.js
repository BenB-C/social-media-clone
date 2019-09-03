import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import profileImg1 from './img/profile_images/1.png';
import profileImg2 from './img/profile_images/2.png';
import profileImg3 from './img/profile_images/3.png';

const PROFILE = {
  userName: 'Kellie A. Corrigan',
  userImage: profileImg1,
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  posts: [
    {
      userName: 'Lorem ipsum',
      userImage: profileImg2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
    },
    {
      userName: 'Lorem ipsum',
      userImage: profileImg3,
      text: 'Lorem ipsum dolor sit amet, consectetur',
      replyingTo: 'Lorem ipsum'
    },
    {
      userName: 'Lorem ipsum',
      userImage: profileImg1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
    },
    {
      userName: 'Lorem ipsum',
      userImage: profileImg2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
    },
    {
      userName: 'Lorem ipsum',
      userImage: profileImg3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
    },
  ],
  followSuggestions: [
    {
      userName: 'Lorem ipsum',
      userImage: profileImg1,
    },
    {
      userName: 'Lorem ipsum',
      userImage: profileImg2,
    },
    {
      userName: 'Lorem ipsum',
      userImage: profileImg3,
    },
  ]
};

ReactDOM.render(<App profile={PROFILE}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
