import React, { Component } from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { bootstrap } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StaffContainer.css";
import { Link, useNavigate } from 'react-router-dom'
import linkedin from '../assets/images/linkedin.png'
// export default class StaffContainer extends Component {
const PartnerComponent = ({name,lastName,email, contactNo,partnerType,location,company,img,nic,graduatedYear, linkedinUrl }) => {

    const navigate = useNavigate();
    const toComponentB=(name, lastName, email,nic,contactNo,partnerType,location, new_img)=>{
        navigate('/profile-list',{state:{  
            name:name,
            lastName, lastName,
            email: email,
            nic: nic,
            contactNo: contactNo,
            partnerType: partnerType,
            location: location,
            img: new_img,
            linkedinUrl
        }});
    }
 
    let new_img = "profile_img.jpg";

    if(img !== ''){
        new_img = img
    }
     
    return (
        <Wrapper>
            <div class="card col-md-8">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="profile-img" src={`uploads/${new_img}`} alt="Sunflower" />
                        </div>
                        <div class="col-md-7">
                            
                            <div className="row">
                            <h5><b>{name} {lastName}</b></h5>
                            <p>{email}</p>
                            { linkedinUrl && <a href={linkedinUrl} target="_blank">
                                <img className="linkedin-button" src={linkedin} />
                              </a>
                            }
                            {/* <p>{contactNo}</p> */}
                        </div>
                        </div>
                        <div class="col-md-2">
                        <button
                          className='btn btn-primary'
                          onClick={(e) => {
                            toComponentB(name, lastName, email,nic,contactNo,partnerType,location, new_img)
                          }}
                        >
                          View
                        </button>
                        </div>
                    </div>
            </div>
            {/* <div class="card col-md-8">
                
                <div>
                    <div>
                        
                    </div>
                        <div className="row">
                            <p>Email: {email}</p>
                            <p>NIC: {nic}</p>
                            <p>Contact NO: {contactNo}</p>
                            <p>Partner Type: {partnerType}</p>
                            <p>Location: {location}</p>
                        </div>
                    </div>
                    </div>
                <div>
            </div> */}
        </Wrapper>
    );
}

export default PartnerComponent
