import { Col, Container, Row } from "reactstrap";
import React, { Component } from "react";

import { Link } from "react-router-dom";
import SectionTitle from "../../components/Common/SectionTitle";
import img1 from "../../assets/images/features-img-1.png";

//Import Components


//Import Images


class Features extends Component {
 
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {/* FEATURES START  */}
        <section className="section bg-light position-relative" id="features">
          <Container>
            <SectionTitle
              title={this.props.features.title}
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
            />

            <Row className="align-items-center">
              <Col lg="6">
                <div className="features-img mt-4">
                  <img
                    src={this.props.features.image}
                    alt="Fetures"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>

              <div className="col-lg-5 offset-lg-1">
                <div className="pr-lg-5 mt-4">
                  <h4 className="line-height-1_6 text-dark mb-4">
                   {this.props.title}
                     <span className="font-weight-600">{this.props.features.sub_title}</span>
                  </h4>
                  <p className="text-muted mb-4 f-15">
                    {this.props.features.body}
                  </p>

                  <Link to="#" className="text-purple f-17">
                    Know more
                    <span className="ml-3 pt-1 right-icon h4">→</span>
                  </Link>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
