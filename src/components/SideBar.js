import React, { Component } from 'react';
import Icon from './icon';
import SideItems from './SideItems';

class SideBar extends Component {
  state = {
    sections: [
      {
        name: 'Hotel',
        icon: 'icon-home',
      },
      {
        name: 'Flight',
        icon: 'icon-aircraft-take-off',
      },
      {
        name: 'Car rental',
        icon: 'icon-key',
      },
      {
        name: 'Tours',
        icon: 'icon-map',
      },
    ],
  };
  onClick = e => {
    console.log(e.target.value);
  };

  renderList = () => {
    const { sections } = this.state;
    return sections.map(({ name, icon }) => (
      // const { name, icon } = section;
      <div key={name}>
        <SideItems section={name} icon={icon} />
      </div>
    ));
  };

  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">{this.renderList()}</ul>
        <div className="legal">&copy; 2018 by trillo. All rights reserved;</div>
      </nav>
    );
  }
}

export default SideBar;
