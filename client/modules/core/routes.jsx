import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import PostList from './containers/postlist';
import ResetPassword from './containers/reset_password';
import NewPost from './containers/newpost';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/reset-password/:token', {
    name: 'reset-password',
    action({token}) {
      mount(MainLayoutCtx, {
        content: () => (<ResetPassword token={token}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });

}
