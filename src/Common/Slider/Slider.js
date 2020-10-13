import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";
import {categoryName} from "../../Utils/constant";
import {categoryColor} from "../../Utils/constant";
import Modal from "../Modal/Modal";

import StarRateIcon from "@material-ui/icons/StarRate";
import PlayCircleFilledSharpIcon from "@material-ui/icons/PlayCircleFilledSharp";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.handleClose= this.handleClose.bind(this)
    this.handleOpen= this.handleOpen.bind(this)
    this.state = {
      open: false,
      trailer:""
    };
  }
  componentDidMount() {
    this.play();
  }
  play() {
    this.slider.slickPlay();
  }

  handleOpen = (trailer) => {
    this.setState({
      open:true,
      trailer:trailer
    })
  };

  handleClose = () => {
    this.setState({
      open:false
    })
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };
    const { bannerData } = this.props;
    return (
      <div className="sliderv2">
        <div className="container">
          <div className="row">
            <div className="slider-single-item">
              <Slider ref={(slider) => (this.slider = slider)} {...settings}>
                { 
                bannerData.length>0 && bannerData.map((data) => (
                  
                  <div className="movie-item" key ={data.id}>
                    <div
                      className="row"
                      style={{ display: "-webkit-inline-flex" }}
                    >
                      <div
                        className="col-md-8 col-sm-12 col-xs-12"
                        style={{ minWidth: "992px" }}
                      >
                        <div className="title-in">
                          <div className="cate">
                            {data.category.map((rating) => (                              
                              <span key={rating}className={categoryColor[rating]}>
                                <a href="#">{categoryName[rating]}</a>
                              </span>
                            ))}
                          </div>
                          <h1>
                          <a href="#">{data.name}</a>
                          </h1>
                          <div className="social-btn">
                            <a href="#" onClick={()=>this.handleOpen(data.trailer)} className="parent-btn">
                              <PlayCircleFilledSharpIcon fontSize="large" />{" "}
                              Watch Trailer
                            </a>
                          </div>
                          <div className="mv-details">
                            <p>
                              <i>
                                <StarRateIcon fontSize="large" />
                              </i>
                          <span>{data.rating}/10</span>
                            </p>
                          </div>
                          <div className="btn-transform transform-vertical">
                            <div>
                              <a href="#" className="item item-1 redbtn">
                                more detail
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="mv-img-2">
                          <a href="#">
                            <img src={require(`../../Assets/${data.img}.jpg`)}  className="poster" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <Modal open={this.state.open} handleClose={this.handleClose} uri={this.state.trailer}/>
                  </div>
                ))
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
