import React from "react";
import "./InTheater.css";
import Slider from "react-slick";
import StarRateIcon from "@material-ui/icons/StarRate";

export default function InTheater(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const { theaterData, title } = props;
  debugger;
  return (
    <div className="movie-items  full-width">
      <div className="row">
        <div className="col-md-12">
          <div className="title-hd">
            <h2>{title}</h2>
            <a href="#" className="viewall">
              View all <i className="ion-ios-arrow-right"></i>
            </a>
          </div>
          <div className="tabs">
            <div className="tab-content">
              <div id="tab1-h2" className="tab active">
                <div className="row">
                  <div className="slick-multiItem2">
                    <Slider {...settings}>
                      {theaterData.map((data) => (
                        <div key={data.id} className="slide-it">
                          <div className="movie-item">
                            <div className="mv-img">
                              <img
                                src={require(`../../../Assets/${data.img}.jpg`)}
                                alt=""
                              />
                            </div>
                            <div className="title-in">
                              <h6>
                                <a href="#">{data.name}</a>
                              </h6>
                              <p style={{ display: "flex" }}>
                              {data.rating && <>
                                <i>
                                  {" "}
                                  <StarRateIcon />
                                </i>
                                <span>{data.rating}/10</span></>}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
