import { Container, Row } from "reactstrap";
import React, { Component } from "react";

import SectionTitle from "../Common/SectionTitle";
import ServiceBox from "./service-box";
import heroBgImg from "../../assets/images/hero-6-bottom-img.png";

//Import Section Title

class Services extends Component {
  state = {
    services: [
      {
        title: "Responsive Web Application",
        icon: "pe-7s-exapnd2",
        description:
          "Your Digital Storefront",
        link: "/details?id=0",
      },
      {
        title: "Mobile Application",
        icon: "pe-7s-world",
        description:
          "Creative application developing ideas  that you cannot deny",
        link: "/details?id=1",
      },
      {
        title: "Digital Marketing",
        icon: "pe-7s-diamond",
        description:
          "Tell a story. Make it true. Make it compelling. And make it relevant",
        link: "/details?id=2",
      },
      {
        title: "Search Engine Optimisation",
        icon: "pe-7s-paint-bucket",
        description:
          "Integrating your search and social efforts brings better brand visibility and higher conversion rates",
        link: "/details?id=3",
      },
      {
        title: "Content Creation",
        icon: "pe-7s-rocket",
        description:
          "The best salespeople are confident and convincing – their product has the solution to your problems",
        link: "/details?id=4",
      },
      {
        title: "Graphic Designing",
        icon: "pe-7s-graph1",
        description:
          "The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.",
        link: "/details?id=5",
      },
    ],
   
  };
  render() {
    return (
      <React.Fragment>
        {/* SERVICE START  */}
        <section id="service" className="section position-relative">
          <Container>
            <SectionTitle
              title="Cloud Service"
            />
            <Row style={{ zIndex: 1 }}>
              <ServiceBox services={this.state.services} />
            </Row>
          </Container>
          <div className="container-fluid">
            <Row>
              <div className="home-bottom-shape" style={{ zIndex: -1 }}>
                <img
                  src={heroBgImg}
                  alt="heroBgImg"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Row>
          </div>
        </section>

        {/* SERVICE END  */}
      </React.Fragment>
    );
  }
}

export default Services;
