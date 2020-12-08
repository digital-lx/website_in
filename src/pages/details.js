import React, { Component } from "react";

import Features from "../components/Features/features";
import Footer from "../components/Footer/footer";
import NavbarPage from "../components/Navbar/Navbar_Page";
import Pricing from "../components/Pricing/pricing";
import {services_data} from '../../src/assets/data'

/* TODO---
  1.create an array of service_details containing details of each service
  2.import the array and map it..
      

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
      service_data:services_data
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
    this.scrollNavigation();
  }

  // componentWillUnmount() {

  //   window.removeEventListener("scroll", this.scrollNavigation, true);
  // }

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
   service_details=(service_id)=>{
    const item_details= services_data.map((item)=>{
    const {id,features,packages}=item
    if(service_id===id){
      console.log("hello")
      return (
        <React.Fragment>
          <Features features={features}/>
          <Pricing  packages={packages}/>
        </React.Fragment>
      )
    }else{
      return null;
    }
 })
 return item_details;
}
   render_item=()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const service_id= parseInt((urlParams.get('id')))
    return this.service_details(service_id)
   }
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
        {this.render_item()}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Details;
