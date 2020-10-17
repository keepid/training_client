import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class ClientLanding extends Component<{}, {}, {}> {
  render() {
    return (
      <div id="Buttons" className="container pt-5">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <h1>Hello welcome to keepid!</h1>
      </div>
    );
  }
}

export default ClientLanding;
