import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { isContext } from 'vm';
import ErrorSVG from '../../static/images/error-icon.svg';
import AangJPG from '../../static/images/aang.jpg';

class ClientLanding extends Component<{}, {}, {}> {
  render() {
    return (
      <div className="container px-0 pt-4">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>

        <div className="alert alert-danger border-red" role="alert">
          <img src={ErrorSVG} className="banner-error-icon mr-2 float-left" alt="red error exclamation" />
          <div>
            <div className="font-weight-bold">The Fire Nation has attacked!</div>
            Fire Lord Ozai has attacked the Earth Kingdom. Try performing the action again.
          </div>
        </div>

        <h1 className="pt-2">Welcome Connor Chong</h1>
        <div className="progress my-4">
          <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} alt="progress bar that fills up" />
        </div>
        <div className="row justify-content-between pb-4 mx-0">
          <button type="button" className="btn btn-outline-primary text-right">Next Step</button>
          <button type="button" className="btn btn-outline-primary text-left">Previous Step</button>
        </div>
        <div className="row mx-0">
          <button type="button" className="btn btn-primary mr-3">Error Message</button>
          <button type="button" className="btn btn-primary mr-3">Success Toast</button>
          <button type="button" className="btn btn-primary">Add Card</button>
        </div>
        <div className="row mx-0 pt-5">
          <div className="col-md-4">
            <div className="card branch-card">
              <img className="card-img-top" src={AangJPG} alt="Aang riding bison" />
              <div className="card-body">
                <h5 className="card-title">Aang</h5>
                <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa</p>
                <button type="button" className="btn btn-primary w-100">Learn About the Avatar</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card branch-card">
              <img className="card-img-top" src={AangJPG} alt="Aang riding bison" />
              <div className="card-body">
                <h5 className="card-title">Aang</h5>
                <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa</p>
                <button type="button" className="btn btn-primary w-100">Learn About the Avatar</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card branch-card">
              <img className="card-img-top" src={AangJPG} alt="Aang riding bison" />
              <div className="card-body">
                <h5 className="card-title">Aang</h5>
                <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa</p>
                <button type="button" className="btn btn-primary w-100">Learn About the Avatar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-0 pt-5 pb-3">
          <div className="col-md-4">
            <div className="card branch-card">
              <img className="card-img-top" src={AangJPG} alt="Aang riding bison" />
              <div className="card-body">
                <h5 className="card-title">Aang</h5>
                <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa</p>
                <button type="button" className="btn btn-primary w-100">Learn About the Avatar</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card branch-card">
              <img className="card-img-top" src={AangJPG} alt="Aang riding bison" />
              <div className="card-body">
                <h5 className="card-title">Aang</h5>
                <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa</p>
                <button type="button" className="btn btn-primary w-100">Learn About the Avatar</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card branch-card">
              <img className="card-img-top" src={AangJPG} alt="Aang riding bison" />
              <div className="card-body">
                <h5 className="card-title">Aang</h5>
                <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa</p>
                <button type="button" className="btn btn-primary w-100">Learn About the Avatar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientLanding;
