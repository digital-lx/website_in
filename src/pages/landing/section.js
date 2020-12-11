import { Col, Container, Row } from "reactstrap";
import React, { Component } from "react";

import heroBgImg from "../../assets/images/hero-4-bg.jpg";

//Import Image

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
                    Providing Digital Luxury
                  </h1>
                  <p className="text-white-50 w-75 mx-auto f-15">
                    We act like we are sitting beside you! We immerse ourselves
                    in a customer's organization from top-to-bottom to
                    understand and learn their goals as these goals become our
                    targets.
                  </p>
                  {/* Also any of their pain points become our pain points and thus
                  we look for solutions to this as a team. We can help your
                  business to achieve digital greatness because we understand
                  the obstacles you are facing and we can deliver the best
                  solutions */}
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
                      Subscribe
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
