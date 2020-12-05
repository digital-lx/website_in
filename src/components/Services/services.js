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
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur consequuntu.",
        link: "/details/:0",
      },
      {
        title: "Mobile Application",
        icon: "pe-7s-world",
        description:
          "These cases are perfectly simple and easy to distinguish that is a free hour.",
        link: "/details/:1",
      },
      {
        title: "Digital Marketing",
        icon: "pe-7s-diamond",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit consectetur adipisci.",
        link: "/details/:2",
      },
      {
        title: "Search Engine Optimisation",
        icon: "pe-7s-paint-bucket",
        description:
          "At vero eos et accusamus iusto odio dignissimos qui blanditiis voluptatum.",
        link: "/details/:3",
      },
      {
        title: "Content Creation",
        icon: "pe-7s-rocket",
        description:
          "Et harum quidem rerum facilis est et expedita distinctio libero tempore soluta.",
        link: "/details/:4",
      },
      {
        title: "Graphic Designing",
        icon: "pe-7s-graph1",
        description:
          "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.",
        link: "/details/:5",
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
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur as sequi nesciunt."
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
