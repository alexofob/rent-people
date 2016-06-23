import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

export default class PublicNavigation extends React.Component {
  render() {
    return (

        <FlatButton label={"Log In"} onTouchTap={this.handleDialogLoginTouchTap.bind(this)} />
      
    );
  }

  handleDialogLoginTouchTap() {
    const {showLoginDialog} = this.props;
    showLoginDialog();
  }
}
