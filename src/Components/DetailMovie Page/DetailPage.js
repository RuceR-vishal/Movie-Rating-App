import React from "react";
import './DetailPage.css'
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function DetailPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <>
      <div class="hero sr-single-hero sr-single">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				
			</div>
		</div>
	</div>
</div>
    <div class="page-single movie-single movie_single">
	<div class="container">
		<div class="row ipad-width2">
			<div class="col-md-4 col-sm-12 col-xs-12">
				<div class="movie-img sticky-sb">
					<img src={require(`../../Assets/${3}.jpg`)} alt=""/>
					<div class="movie-btn">	
						<div class="btn-transform transform-vertical red">
							<div><a href="#" class="item item-1 redbtn"> <i class="ion-play"></i> Watch Trailer</a></div>
							<div><a href="https://www.youtube.com/embed/o-0hcF97wy0" class="item item-2 redbtn fancybox-media hvr-grow"><i class="ion-play"></i></a></div>
						</div>
						<div class="btn-transform transform-vertical">
							<div><a href="#" class="item item-1 yellowbtn"> <i class="ion-card"></i> Buy ticket</a></div>
							<div><a href="#" class="item item-2 yellowbtn"><i class="ion-card"></i></a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="movie-single-ct main-content">
					<h1 class="bd-hd">The Big Bang Theory <span> 2007 - current</span></h1>
					<div class="movie-rate">
						<div class="rate">
							<i class="ion-android-star"></i>
							<p><span>8.1</span> /10<br/>
								<span class="rv">56 Reviews</span>
							</p>
						</div>
					</div>
					<div class="movie-tabs">
						<div class="tabs">
							
						    <div class="tab-content">
						        <div id="overview" class="tab active">
						            <div class="row">
						            	<div class="col-md-8 col-sm-12 col-xs-12">
						            		<p>Leonard Hofstadter and Sheldon Cooper are both brilliant physicists working at Cal Tech in Pasadena, California. They are colleagues, best friends, and roommates, although in all capacities their relationship is always tested primarily by Sheldon's regimented, deeply eccentric, and non-conventional ways.</p>
						            	
						            		<div class="title-hd-sm">
												<h4>Videos & Photos</h4>
												<a href="#" class="time">All 5 Videos & 245 Photos <i class="ion-ios-arrow-right"></i></a>
											</div>
											<div class="mvsingle-item ov-item">
												<a class="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image41.jpg" ><img src="images/uploads/image4.jpg" alt=""/></a>
												<a class="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image51.jpg" ><img src="images/uploads/image5.jpg" alt=""/></a>
												<a class="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image61.jpg" ><img src="images/uploads/image6.jpg" alt=""/></a>
												<div class="vd-it">
													<img class="vd-img" src="images/uploads/image7.jpg" alt=""/>
													<a class="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt=""/></a>
												</div>
											</div>
											<div class="title-hd-sm">
												<h4>cast</h4>
												<a href="#" class="time">Full Cast & Crew  <i class="ion-ios-arrow-right"></i></a>
											</div>
											<div class="mvcast-item">											
												<div class="cast-it">
													<div class="cast-left">
														<img src="images/uploads/cast1.jpg" alt=""/>
														<a href="#">Robert Downey Jr.</a>
													</div>
													<p>...  Robert Downey Jr.</p>
												</div>
												<div class="cast-it">
													<div class="cast-left">
														<img src="images/uploads/cast2.jpg" alt=""/>
														<a href="#">Chris Hemsworth</a>
													</div>
													<p>...  Thor</p>
												</div>
											</div>
											<div class="title-hd-sm">
												<h4>User reviews</h4>
												<a href="#" class="time">See All 56 Reviews <i class="ion-ios-arrow-right"></i></a>
											</div>
											<div class="mv-user-review-item">
												<h3>Best Marvel movie in my opinion</h3>
												<div class="no-star">
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star"></i>
													<i class="ion-android-star last"></i>
												</div>
												<p class="time">
													17 December 2016 by <a href="#"> hawaiipierson</a>
												</p>
												<p>This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.</p>
											</div>
						            	</div>
						            	<div class="col-md-4 col-xs-12 col-sm-12">
						            		<div class="sb-it">
						            			<h6>Director: </h6>
						            			<p><a href="#">Mark Cendrowski</a></p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Writer: </h6>
						            			<p><a href="#"> Chuck Lorre,</a> <a href="#">Bill Prady</a></p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Stars: </h6>
						            			<p><a href="#">Robert Downey Jr,</a> <a href="#">Chris Evans,</a> <a href="#">Mark Ruffalo,</a><a href="#"> Scarlett Johansson</a></p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Genres:</h6>
						            			<p><a href="#">Action, </a> <a href="#"> Sci-Fi,</a> <a href="#">Adventure</a></p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Release Date:</h6>
						            			<p>1 May 2006 (U.S.A)</p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>Run Time:</h6>
						            			<p>22 min</p>
						            		</div>
						            		<div class="sb-it">
						            			<h6>MMPA Rating:</h6>
						            			<p>TV-14</p>
						            		</div>
						            	</div>
						            </div>
						        </div>
						        </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</>
    );
}
