import React from 'react';
import Popover from 'material-ui/lib/popover/popover';
import FlatButton from 'material-ui/lib/flat-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';
import Divider from 'material-ui/lib/divider';

const styles = {
  popover: {
    padding: 20,
  },
};

export default class AuthenticatedNavigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap(event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  showFirstName() {
    if (!!this.props.user) {
      const {firstName} = this.props.user.name;
      return firstName;
    } else return "";
  }

  logout() {
    this.setState({
      open: false,
    });
    Meteor.logout();
    }

  render() {
    return (
      <div>
        <FlatButton
          onTouchTap={this.handleTouchTap.bind(this)}
          label={this.showFirstName.bind(this)()}
          labelPosition="before"
          icon={<FontIcon className="material-icons">arrow_drop_down</FontIcon>}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <div style={styles.popover}>
            <MenuItem primaryText="My Dashboard" leftIcon={<FontIcon className="material-icons">dashboard</FontIcon>}/>
            <MenuItem primaryText="My Listings" leftIcon={<FontIcon className="material-icons">list</FontIcon>}/>
            <MenuItem primaryText="My Reservations" leftIcon={<FontIcon className="material-icons">store</FontIcon>}/>
            <MenuItem primaryText="Edit Profile" leftIcon={<FontIcon className="material-icons">person</FontIcon>}/>
            <Divider />
            <MenuItem
            primaryText="Log Out"
            leftIcon={<FontIcon className="material-icons">arrow_back</FontIcon>}
            onTouchTap={this.logout.bind(this)}
            />
          </div>
        </Popover>
      </div>
    );
  }
}
