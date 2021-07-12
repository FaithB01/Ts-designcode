import React from 'react';

const Header = () => {
  return (
    <header className="brand-header">
      <div className="logo">
        <img src="https://tailwindui.com/img/logos/v1/workflow-mark-on-brand.svg" width="40" height="30" alt="Workflow logo" />
      </div>
      <div className="search">

        <input id="search" className=" placeholder" placeholder="Search projects" type="search"  />
      </div>
      <div className="end">
        <div className="text">
          <div className="text-one">Documentation
          </div>
          <div className="text-two">Support
          </div>
        </div>
        <div className="prof">
          <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" width="30" height="30" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
