import React, { Component } from "react";

import Features from "../components/Features/features";
import Footer from "../components/Footer/footer";
import NavbarPage from "../components/Navbar/Navbar_Page";
import Pricing from "../components/Pricing/pricing";

/* TODO---
  1.create an array of service_details containing details of each service
      

*/
const navItems =[
    { id: 1, idnm: "home", navheading: "Home" , path:'/' },
    { id: 2, idnm: "service", navheading: "Services", path:'' },
    { id: 4, idnm: "client", navheading: "Clients" },
  ]
class Details extends Component {
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

        
       

        
        <Features />

       
    

        
     

       
        <Pricing />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Details;
