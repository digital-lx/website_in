import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

//Import Image
import heroBgImg from "../../assets/images/hero-3-bg.jpg";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        {/* HERO START */}

        <section
          className="hero-3-bg position-relative"
          id="home"
          style={{ background: `url(${heroBgImg}) center center` }}
        >
          <div className="bg-dark-overlay" />
          <Container>
            <Row className=" justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <h1 className="text-white hero-3-title mb-4 line-height-1_4">
                    Create amazing landing page with Digital Luxe
                  </h1>
                  <p className="text-white-50 w-75 mx-auto f-15">
                  At Digital Luxe, we work with famous brands, web design, web development & mobile app based and all industries companies and global agencies. Whether you are just starting out or evolving your business, we offers the expertise in custom & creative web design, web development, mobile app development that will take you to the next level from Website Design Company.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center Subcribe-form mt-5">
                  <form action="#">
                    <input type="text" placeholder="Enter your Email..." />
                    <button
                      type="submit"
                      className="btn rounded-pill btn-purple ml-2"
                    >
                      SubCribe
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* HERO END  */}
      </React.Fragment>
    );
  }
}

export default Section;
