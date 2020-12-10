import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";


//Import Footer link
import FooterLinks from "./footer-links";

//Import Images
import footerlogo from "../../assets/images/logo1.png";

class Footer extends Component {
  state = {
    footerItems: [
      {
        title: "Services",
        links: [
          { linkTitle: "Responsive Web Application", link: "/" },
          { linkTitle: "Mobile Application", link: "#" },
          { linkTitle: "Digital Marketing", link: "#" },
          { linkTitle: "Search Engine Optimisation", link: "#" },
          { linkTitle: "Content Creation", link: "#" },
          { linkTitle: "Graphic Designing", link: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { linkTitle: "Works", link: "#" },
          { linkTitle: "Strategy", link: "#" },
        ],
      },
      {
        title: "Learn More",
        links: [
          { linkTitle: "Support", link: "#" },
        ],
      },
    ],
    socialIcons: [
      { icon: "remixicon-facebook-line", iconLink: "#" },
      { icon: "remixicon-twitter-line", iconLink: "#" },
      { icon: "remixicon-instagram-line", iconLink: "#" },
      { icon: "remixicon-skype-line", iconLink: "#" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {/* FOOTER START  */}
        <footer className="pt-5 pb-4 position-relative bg-light">
          <Container className="container">
            <Row>
              <Col lg={3}>
                <div className="footer-about-content mt-4">
                  <img
                    src={footerlogo}
                    alt="footerLogo"
                    className="img-fluid"
                  />
                  <p className="mt-4 text-muted f-15">
                    All of the rights reserved by Digital Luxe
                  </p>
                  <ul className="list-inline footer-icon mt-4">
                    {this.state.socialIcons.map((item, key) => (
                      <li className="list-inline-item h4 mr-4" key={key}>
                        <Link to={item.iconLink} className="text-purple">
                          <i className={item.icon} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg={8} className="offset-lg-1">
                <div className="row">
                  {this.state.footerItems.map((item, key) => (
                    <div className="col-md-4" key={key}>
                      <div className="mt-4">
                        <h5 className="text-dark footer-title font-weight-medium mb-4">
                          {item.title}
                        </h5>
                        <ul className="list-unstyled footer-sub-menu">
                          {item.links.map((fLink, key) => (
                            <li className="f-15 mt-3 mb-3" key={key}>
                              <Link to={fLink.link} className="text-muted">
                                {fLink.linkTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
            <FooterLinks />
          </Container>
        </footer>

        {/* FOOTER END  */}
      </React.Fragment>
    );
  }
}

export default Footer;
