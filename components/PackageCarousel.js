import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/CardMain.js";

import image1 from "assets/img/beerLabels/Group1.png";
import image2 from "assets/img/beerLabels/Group2.png";
import image3 from "assets/img/beerLabels/Group3.png";
import image4 from "assets/img/beerLabels/Group4.png";
import image5 from "assets/img/beerLabels/Group5.png";

export default function PackageCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <Carousel {...settings}>
            <div>
              <img
                src={image1}
                alt="First slide"
                className="slick-image"
              />
            </div>
            <div>
              <img
                src={image2}
                alt="Second slide"
                className="slick-image"
              />

            </div>
            <div>
              <img
                src={image3}
                alt="Third slide"
                className="slick-image"
              />

            </div>
            <div>
              <img
                src={image4}
                alt="Third slide"
                className="slick-image"
              />

            </div>
            <div>
              <img
                src={image5}
                alt="Third slide"
                className="slick-image"
              />

            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
  );
}