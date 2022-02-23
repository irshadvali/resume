import React, { Component } from 'react';
import {dataResult} from '../utils/resumeData'; 
class About extends Component {
  render() {

   //  if(this.props.data){
   //    var name = this.props.data.name;
   //    var profilepic= "images/"+this.props.data.image;
   //    var bio = this.props.data.bio;
   //    var street = this.props.data.address.street;
   //    var city = this.props.data.address.city;
   //    var state = this.props.data.address.state;
   //    var zip = this.props.data.address.zip;
   //    var phone= this.props.data.phone;
   //    var email = this.props.data.email;
   //    var resumeDownload = this.props.data.resumedownload;
   //  }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={"images/profilepic.jpeg"} alt="Irshad Vali Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{dataResult.main.bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{dataResult.main.name}</span><br />
						   <span>{dataResult.main.address.street}<br />
						         {dataResult.main.address.city} {dataResult.main.address.state}, {dataResult.main.address.zip}
                   </span><br />
						   <span>{dataResult.main.phone}</span><br />
                     <span>{dataResult.main.email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={dataResult.main.resumedownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
