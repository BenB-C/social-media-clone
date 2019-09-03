import React from 'react';
import './App.css';

class FollowSuggestions extends React.Component {
  render() {
    return (
      <div className="FollowSuggestions">

      </div>
    );
  }
}

class Feed extends React.Component {
  render() {
    return (
      <div className="Feed">

      </div>
    );
  }
}

class ProfileSidebar extends React.Component {
  render() {
    return (
      <div className="ProfileSidebar">

      </div>
    );
  }
}

class AppContent extends React.Component {
  render() {
    return (
      <div className="ProfileBox">
        <ProfileSidebar />
        <Feed />
        <FollowSuggestions />
      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <nav>
    <ul className="NavBar">
      <li className="Link"><a href="#">Home</a></li>
      <li className="Link"><a href="#">Notifications</a></li>
      <li className="Link"><a href="#">Messages</a></li>
      <li className="Forms"><form><input type="text" placeholder="Tweet" /></form></li>
      <li className="Forms"><form><input type="text" placeholder="Search" /></form></li>
    </ul>
    </nav>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AppContent profile={this.props.profile} />
      </div>
    );
  }

}



export default App;
