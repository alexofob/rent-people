import React from 'react';
import Popover from 'material-ui/lib/popover/popover';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';
import Divider from 'material-ui/lib/divider';

export default class MobileAuthNavigation extends React.Component {

  render() {
    return (
      <div>
      <MenuItem primaryText={this.showFirstName.bind(this)()} leftIcon={<FontIcon className="material-icons">person</FontIcon>}/>
      <Divider />
      <MenuItem primaryText="My Dashboard" leftIcon={<FontIcon className="material-icons">dashboard</FontIcon>}/>
      <MenuItem primaryText="My Listings" leftIcon={<FontIcon className="material-icons">list</FontIcon>}/>
      <MenuItem primaryText="My Reservations" leftIcon={<FontIcon className="material-icons">store</FontIcon>}/>
      <MenuItem primaryText="Find a house to rent" leftIcon={<FontIcon className="material-icons">search</FontIcon>}/>
      <MenuItem primaryText="List your house" leftIcon={<FontIcon className="material-icons">add_circle</FontIcon>}/>
      <Divider />
      <MenuItem
      primaryText="Log Out"
      leftIcon={<FontIcon className="material-icons">arrow_back</FontIcon>}
      onTouchTap={this.logout.bind(this)}
      />

      </div>
    );
  }

  showFirstName() {
    return "Alex";
  }

  logout() {
    Meteor.logout();
  }
}
