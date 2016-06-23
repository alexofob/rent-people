import React from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';

export default class MobilePubNavigation extends React.Component {
  render() {
    return (
      <div>

        <MenuItem primaryText="Log in" leftIcon={<FontIcon className="material-icons">arrow_forward</FontIcon>}
          onTouchTap={this.handleDialogLoginTouchTap.bind(this)}
        />
        <MenuItem primaryText="Services" leftIcon={<FontIcon className="material-icons">info</FontIcon>}/>
        <MenuItem primaryText="List your house" leftIcon={<FontIcon className="material-icons">add_circle</FontIcon>}/>
        <MenuItem primaryText="Find a house to rent" leftIcon={<FontIcon className="material-icons">search</FontIcon>}/>

      </div>  
    );
  }

  handleDialogLoginTouchTap() {
    const {showLoginDialog} = this.props;
    showLoginDialog();
  }
}
