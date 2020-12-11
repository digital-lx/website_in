import { Col, Container, Row } from "reactstrap";
import React, { Component } from "react";

import SectionTitle from "../Common/SectionTitle";
import  {services_data} from '../../assets/data'

//Import Section Title


class Pricing extends Component {
  pricingPlan1 = {
    pricings: [
      {
        id: 1,
        title: "Free",
        price: "8.20",
        duration: "month",
        currency: "$",
        features: {
          bandwith: "1GB",
          onlinespace: "500MB",
          support: "No",
        },
      },
    ],
  };

  pricingPlan2 = {
    pricings: [
      {
        id: 1,
        title: "-20%",
        price: "49.70",
        currency: "$",
        duration: "month",
        features: {
          bandwith: "1.5GB",
          onlinespace: "1GB",
          support: "Yes",
        },
      },
    ],
  };

  pricingPlan3 = {
    pricings: [
      {
        id: 1,
        title: "-50%",
        price: "99.9",
        currency: "$",
        duration: "month",
        features: {
          bandwith: "4GB",
          onlinespace: "2GB",
          support: "No",
        },
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {/* PRICING START */}
        <section className="section bg-light" id="pricing">
          <Container>
            <SectionTitle
              title=" OUR SERVICES"
              description="What we can do for you?"
            />
            <Row>
                <>
                <Col lg={4} >
                  
                  <div
                    className="pricing-box text-center bg-white p-5 mt-4 position-relative">
                    <div className="mt-4 mb-5">
                      <i className="remixicon-star-line h3 text-purple pricing-icon p-4 rounded-circle" />
                    </div>
                    <h2 className="text-dark font-weight-medium mb-5">
                      <sup className="h5"></sup>
                      <h4>Basic</h4>
                      <sub className="h5"></sub>
                    </h2>
                    
                    <p className="text-muted">
                    {this.props.packages.basic[0]}
                    </p>
                    <p className="text-muted">
                    {this.props.packages.basic[1]}
                    </p>
                    <p className="text-muted">
                    {this.props.packages.basic[2]}
                    </p>
                    
                    <button
                      type="button"
                      className="btn btn-outline-purple mt-4"
                    >
                      Choose this plan
                    </button>
                  </div>
                </Col>
             
                <Col lg={4} >
                  <div className="pricing-box active text-center bg-white p-5 mt-4 position-relative">
                    <div className="ribbon">
                      <p className="mb-0 f-12 font-weight-medium text-white">
                       <h4>(%)</h4>
                      </p>
                    </div>
                    <div className="mt-4 mb-5">
                      <i className="remixicon-star-half-line h3 text-purple pricing-icon p-4 rounded-circle" />
                    </div>
                    <h2 className="text-dark font-weight-medium mb-5">
                      <sup className="h5"> </sup>
                      <h4>Pro</h4>
                      <sub className="h5"></sub>
                    </h2>
                    <p className="text-muted">
                    {this.props.packages.pro[0]}
                    </p>
                    <p className="text-muted">
                      {this.props.packages.pro[1]} 
                    </p>
                    <p className="text-muted">
                    {this.props.packages.pro[2]} 
                    </p>
                    <button type="button" className="btn btn-purple mt-4">
                      Choose this plan
                    </button>
                  </div>
                </Col>
              
                <Col lg={4} >
                  <div className="pricing-box text-center bg-white p-5 mt-4 position-relative">
                    <div className="ribbon">
                      <p className="mb-0 f-12 font-weight-medium text-white">
                      <h4>(%)</h4>
                      </p>
                    </div>
                    <div className="mt-4 mb-5">
                      <i className="remixicon-star-fill h3 text-purple pricing-icon p-4 rounded-circle" />
                    </div>
                    <h2 className="text-dark font-weight-medium mb-5">
                      <sup className="h5"> </sup>
                      <h4>Exclusive</h4>
                      <sub className="h5"></sub>
                    </h2>
                    <p className="text-muted">
                    {this.props.packages.exclusive[0]} 
                    </p>
                    <p className="text-muted">
                    {this.props.packages.exclusive[1]} 
                    </p>
                    <p className="text-muted">
                    {this.props.packages.exclusive[2]} 
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-purple mt-4"
                    >
                      Choose this plan
                    </button>
                  </div>
                </Col>
                </>
            </Row>
          </Container>
        </section>

        {/* PRICING END  */}
      </React.Fragment>
    );
  }
}

export default Pricing;
