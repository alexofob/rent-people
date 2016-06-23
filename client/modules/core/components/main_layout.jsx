import React from 'react';
import Header from '../containers/header';
import Footer from './footer.jsx';

const MainLayout = ({content = () => null }) => (
  <div>
    <Header  />

    <div className="flex-container">
      {content()}
    </div>

    <Footer />
  </div>
);

export default MainLayout;
