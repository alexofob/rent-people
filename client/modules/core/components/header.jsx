import React from 'react';
import AuthenticatedNavigation from '../containers/authenticated_nav';
import PublicNavigation from '../containers/public_nav';
import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import FlatButton from 'material-ui/lib/flat-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Dialog from 'material-ui/lib/dialog';
import Login from '../containers/login';
import SignUp from '../containers/signup';
import Snackbar from 'material-ui/lib/snackbar';
import MobilePubNavigation from '../containers/mobile_pub_nav';
import MobileAuthNavigation from './mobile_auth_nav.jsx';
import ResetPwd from '../containers/reset_pwd';

const styles = {
  menuIcon: {
    marginRight: 25,
    marginLeft: -25,
    display: 'none'
    }
};

const customContentStyle = {
  width: '90%',
  maxWidth: 320,
  display: 'flex',
  flexDirection: 'column'
};

const DialogContent = {
  login: {node: () => <Login/>, title: '' },
  signup: {node: () => <SignUp/>, title: 'Sign Up' },
  resetPwd: {node: () => <ResetPwd/>, title: 'Reset Password' }
};

class Header extends React.Component {

  handleLeftNavToggle() {
    const {showLeftNav} = this.props;
    showLeftNav();
  }

  handleLeftNavClose() {
    const {closeLeftNav} = this.props;
    closeLeftNav();
  }

  handleDialogClose() {
    const {closeDialog} = this.props;
    closeDialog();
  }

  dialogContent() {
    return DialogContent[this.props.headerState.dialogContent].node()
  }

  handleSnackbarClose() {
    const {closeSnackbar} = this.props;
    closeSnackbar();
  }

  dynamicNavItems() {
    if ( !Meteor.loggingIn() && Meteor.user() ) {
      return <AuthenticatedNavigation />;
    } else {
      return <PublicNavigation />;
    }
  }

  mobiledynamicNav() {
    if ( !Meteor.loggingIn() && Meteor.user() ) {
      return <MobileAuthNavigation />;
    } else {
      return <MobilePubNavigation />;
    }
  }


  render() {
    const {openLeftNav, openDialog, dialogContent, openSnackbar, snackbarMessage} = this.props.headerState;

    return (
      <div>
        <Toolbar>
          <ToolbarGroup float="left">
            <FontIcon className="material-icons mobile-only" style={styles.menuIcon} onTouchTap={this.handleLeftNavToggle.bind(this)}>menu</FontIcon>
            <a className="brand" href="/">
                <ToolbarTitle text="Rent People" />
            </a>
          </ToolbarGroup>
          <ToolbarGroup className='desktop-only flex-container' lastChild={true} float="right">
            {this.dynamicNavItems()}
            <FlatButton label="Services" />
            <RaisedButton label="List your house" primary={true} />
          </ToolbarGroup>
        </Toolbar>

        <LeftNav
          docked={false}
          width={250}
          open={openLeftNav}
          onRequestChange={this.handleLeftNavClose.bind(this)}
        >
          {this.mobiledynamicNav()}

        </LeftNav>

        <Dialog

          modal={false}
          open={openDialog || false}
          onRequestClose={this.handleDialogClose.bind(this)}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
        >
          {this.dialogContent()}
        </Dialog>

        <Snackbar
          open={openSnackbar}
          message={snackbarMessage}
          autoHideDuration={8000}
          onRequestClose={this.handleSnackbarClose.bind(this)}
        />

      </div>
    );
  }
}

export default Header;
