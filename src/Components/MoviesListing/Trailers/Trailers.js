import React, { Component } from "react";
import "./Trailers.css";
import Slider from "react-slick";

export default class Trailers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="trailers">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-12">
              <div className="title-hd">
                <h2>Trailers</h2>
              </div>
              <div className="videos">
                <div className="slider-for-2 video-ft">
                  <Slider
                    asNavFor={this.state.nav2}
                    ref={(slider) => (this.slider1 = slider)}
                  >
                    <div>
                      <iframe
                        className="item-video"
                        src="https://www.youtube.com/embed/XZG1FzyB8DI"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="https://www.youtube.com/embed/w0qQkSuWOS8"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="https://www.youtube.com/embed/44LdLqgOpjo"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="https://www.youtube.com/embed/gbug3zTm3Ws"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="https://www.youtube.com/embed/e3Nl_TCQXuw"
                      ></iframe>
                    </div>
                    <div>
                      <iframe
                        className="item-video"
                        src="https://www.youtube.com/embed/NxhEZG0k9_w"
                      ></iframe>
                    </div>
                  </Slider>
                  <Slider
                    asNavFor={this.state.nav1}
                    ref={(slider) => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                   <div>
                      <iframe className="iframesub"
                        src="https://www.youtube.com/embed/1Q8fG0TtVAY"
                      ></iframe>
                    </div>
                    <div>
                      <iframe className="iframesub"
                        src="https://www.youtube.com/embed/w0qQkSuWOS8"
                      ></iframe>
                    </div>
                    <div>
                      <iframe className="iframesub"
                        src="https://www.youtube.com/embed/44LdLqgOpjo"
                      ></iframe>
                    </div>
                    <div>
                      <iframe className="iframesub"
                        src="https://www.youtube.com/embed/gbug3zTm3Ws"
                      ></iframe>
                    </div>
                    <div>
                      <iframe className="iframesub"
                        src="https://www.youtube.com/embed/e3Nl_TCQXuw"
                      ></iframe>
                    </div>
                    <div>
                      <iframe className="iframesub"
                        src="https://www.youtube.com/embed/NxhEZG0k9_w"
                      ></iframe>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
