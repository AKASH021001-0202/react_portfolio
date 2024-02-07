import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import slider from "../../assets/images/photo-1514790193030-c89d266d5a9d.jpg";
import Typewriter from "./Typewriter";
import { users } from '../../utilities/data';


const Slider = () => {
  
  return (
    <>
      <section className="bg-slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-sm-2 ">
            {users.map((user, index) => (
                <div 
                  key={user.id}
                  className="slider-intro"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  <h2 className="text-white"  data-aos="fade-up-right" > I’m {user.name}</h2>
                  <h2 className="text-white" style={{display: 'flex', gap: '10px'}}  data-aos="fade-up-right" > {user.description} 
                    {/* {user.technologies.map((tech, techIndex) => (
                      <Typewriter key={techIndex} words={[tech]} />
                    ))} */}
                    {Object.values(user.technologies).map((tech, techIndex) => (
                      <Typewriter key={techIndex} words={[tech]} />
                     
                    ))}
                  </h2>
                </div>
              ))}
            </div>
            <div className="col-lg-6 slider order-sm-1">
              <img src={slider} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
