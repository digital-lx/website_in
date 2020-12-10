import React, { Component } from "react";

import Achievement from "../../components/Achievement/achievements";
import Clients from "../../components/Clients/clients";
import ContactUs from "../../components/ContactUs/contactus";
import Features from "../../components/Features/features";
import Footer from "../../components/Footer/footer";
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Pricing from "../../components/Pricing/pricing";
import Section from "./section";
import Services from "../../components/Services/services";
const navItems =[
  { id: 1, idnm: "home", navheading: "Home",path:'/' },
  { id: 2, idnm: "service", navheading: "Services",path:'/details' },
  { id: 4, idnm: "client", navheading: "Clients",path:'/clients' },
]
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
      isStickyNav: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
    this.scrollNavigation();
  }

  componentWillUnmount() {

    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;

    if (scrollup > this.state.pos) {
      this.setState({ navClass: "darkheader", imglight: false });
      this.setState({ isStickyNav: false });
    } else if (window.innerWidth <= 768) {
      this.setState({ navClass: "darkheader", imglight: false });
      this.setState({ isStickyNav: false });
    } else {
      this.setState({ navClass: "", imglight: true });
      this.setState({ isStickyNav: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}

        <NavbarPage
        navItems={navItems}
          navclass={this.state.navClass}
          imglight={this.state.imglight}
          isStickyNav={this.state.isStickyNav}
        />

        {/* import section */}
        <Section />

        {/* import services */}
        <Services />

        {/* import Features */}
    

        {/* import Achievement */}
        <Achievement />

        {/* import Clients */}
        <Clients />

        {/* import Pricing */}
        

        {/* import ContactUs */}
        <ContactUs />

        {/* import Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
