/// <reference types="react" />
export declare const NewsItemStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const NewsImageStyled: import("styled-components").StyledComponent<import("react").FC<import("@matthill8286/atomic-ui").PictureProps>, any, {}, never>;
export declare const NewsHeadingStyled: import("styled-components").StyledComponent<import("react").FC<import("@matthill8286/atomic-ui").HeadingProps>, any, {}, never>;
export declare const NewsDateStyled: import("styled-components").StyledComponent<import("react").FC<import("@matthill8286/atomic-ui").HeadingProps>, any, {}, never>;
export declare const NewsPostLargeStyled: import("styled-components").StyledComponent<import("react").FC<import("@matthill8286/atomic-ui").HeadingProps>, any, {}, never>;
/**

.news-item.quiet {
  opacity: 0.25;
  -moz-opacity: 0.25;
  -webkit-opacity: 0.25;
  filter: alpha(opacity=25);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)";
  -webkit-transform: scale3d(0.8, 0.8, 1);
  -moz-transform: scale3d(0.8, 0.8, 1);
  -ms-transform: scale3d(0.8, 0.8, 1);
  -o-transform: scale3d(0.8, 0.8, 1);
  transform: scale3d(0.8, 0.8, 1);
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -ms-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}

.owl-item.active.center .news-item {
  opacity: 1;
  -moz-opacity: 1;
  -webkit-opacity: 1;
  filter: alpha(opacity=100);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  -webkit-transform: scale3d(1.0, 1.0, 1);
  -moz-transform: scale3d(1.0, 1.0, 1);
  -ms-transform: scale3d(1.0, 1.0, 1);
  -o-transform: scale3d(1.0, 1.0, 1);
  transform: scale3d(1.0, 1.0, 1);
}

.owl-carousel .owl-item img {
  margin: 0;
  padding: 0;
  background: #fff;
}

.news-item .news-content img {
  max-width: 100%;
  -webkit-transition: all .8s ease-out;
  -moz-transition: all .8s ease-out;
  -ms-transition: all .8s ease-out;
  -o-transition: all .8s ease-out;
  transition: all .8s ease-out;
}

.news-item:hover .news-content img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}

.news-content {
  position: relative;
  overflow: hidden;
  margin: 0;
  width: 100%;
  min-width: 250px;
  height: auto;
}

.news-content img {
  max-width: 100%;
  vertical-align: top;
  margin: 0;
  padding: 0;
  opacity: 1;
  -moz-opacity: 1;
  -webkit-opacity: 1;
  filter: alpha(opacity=100);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.news-content .date {
  position: relative;
  width: 100%;
  background: none;
  text-align: center;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: -20px auto -2px auto;
  padding: 20px 0 0 0;
}

.news-content figcaption {
  position: relative;
  width: 100%;
  background: #fff;
  padding: 0;
}

@media all and (min-width: 1920px) {
.news-content figcaption {
    padding: 0;
  }
}

@media only screen and (max-width: 995px) {
.news-content figcaption {
    padding: 0;
  }
}

.news-content h3 {
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #2e2e2e;
  margin: -2px 0 0 0;
}

.news-content h5,
.modal-content .date {
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #2e2e2e;
  margin: -1px auto 2px auto;
}

.news-content p {
  color: #2e2e2e;
  text-align: center;
  margin: -3px auto;
  padding: 0;
}

.section-txt-news p {
  position: relative;
  margin: -8px auto;
}

.section-txt-news a,
.section-txt-news a:hover {
  text-decoration: none;
  font-weight: 600;
}

.post-all-heading {
  position: relative;
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -0.04em;
  color: #000;
  line-height: 1;
  margin: -5px auto 0 auto;
  z-index: 10;
}

@media all and (min-width: 1920px) {
.post-all-heading {
    font-size: 70px;
    margin: -8px auto -1px auto;
  }
}

@media only screen and (max-width: 640px) {
.post-all-heading {
    font-size: 40px;
    margin: -3px auto 0 auto;
  }
}

.post-all p {
  text-align: center;
  color: #fff;
}

.post-all {
  margin-top: 5px;
}



.the-overline {
  position: relative;
  background: #ff264a;
  width: 90px;
  height: 9px;
  text-align: left;
  z-index: 10;
  margin: -4px 0 1px 0;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

@media all and (min-width: 1920px) {
.the-overline {
    width: 110px;
  }
}

.the-overline-home {
  background: #fff;
  text-align: center;
  margin: 1px 0 1px 0;
}

.the-overline-services {
  margin: 1px 0;
}

.the-overline-news {
  text-align: center;
  margin: 1px auto;
}

.the-overline-testimonials {
  text-align: center;
  margin: 0 auto 1px auto;
}

.the-overline-featured {
  margin: 1px 0;
}

.the-overline-contact {
  text-align: center;
  margin: 1px auto;
}

@media only screen and (max-width: 995px) {
.the-overline,
.the-overline-home,
.the-overline-services,
.the-overline-news,
.the-overline-testimonials,
.the-overline-featured,
.the-overline-contact {
    width: 90px;
    height: 7px;
  }
}

@media only screen and (max-width: 640px) {
.the-overline,
.the-overline-home,
.the-overline-services,
.the-overline-news,
.the-overline-testimonials,
.the-overline-featured,
.the-overline-contact {
    width: 45px;
    height: 5px;
  }
}



.inner-divider,
.inner-divider-half,
.inner-divider-mobile,
.inner-divider-services,
.inner-divider-news,
.inner-divider-news-half,
.inner-divider-contact {
  position: relative;
  width: 100%;
  margin: 0 auto;
  background: none;
  z-index: -1;
}

.inner-divider {
  height: 100px;
}

@media all and (min-width: 1920px) {
.inner-divider {
    height: 150px;
  }
}

@media only screen and (max-width: 995px) {
.inner-divider {
    height: 100px;
  }
}

@media only screen and (max-width: 640px) {
.inner-divider {
    height: 80px;
  }
}

.inner-divider-half {
  height: 40px;
}

.inner-divider-half.inner-divider-half-works {
  height: 20px;
}

@media all and (min-width: 1920px) {
.inner-divider-half.inner-divider-half-works {
    height: 40px;
  }
}

.inner-divider-mobile {
  display: none;
  visibility: hidden;
  height: 100px;
}

@media only screen and (max-width: 995px) {
.inner-divider-mobile {
    display: block;
    visibility: visible;
  }
}

@media only screen and (max-width: 640px) {
.inner-divider-mobile {
    height: 80px;
  }
}

.inner-divider-services,
.inner-divider-news,
.inner-divider-contact {
  height: 80px;
}

.inner-divider-news-half {
  height: 40px;
}


.the-button-wrapper,
.the-button-wrapper-news,
.the-button-wrapper-contact {
  position: relative;
  width: 175px;
  height: auto;
  line-height: 1.5;
  padding: 0;
  text-align: center;
  cursor: pointer;
}

.the-button-wrapper {
  margin: -7px 0 0 7px;
}

@media all and (min-width: 1920px) {
.the-button-wrapper {
    width: 205px;
    margin: -4px 0 0 7px;
  }
}

@media only screen and (max-width: 640px) {
.the-button-wrapper {
    width: 175px;
  }
}

.the-button-wrapper-news {
  margin: -7px auto 13px auto;
}

@media all and (min-width: 1920px) {
.the-button-wrapper-news {
    margin: -4px auto 16px auto;
  }
}

@media only screen and (max-width: 640px) {
.the-button-wrapper.the-button-wrapper-works {
    margin: -7px 0 13px 7px;
  }
}

.the-button-wrapper-contact {
  margin: -7px auto 13px auto;
}

@media all and (min-width: 1920px) {
.the-button-wrapper-contact {
    width: 205px;
    margin: -4px auto 16px auto;
  }
}

.the-button {
  position: relative;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.10em;
  color: #ff264a;
  background: none;
  padding: 9px 40px 0 40px;
  margin-top: 10px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
  border-radius: 0;
}

@media all and (min-width: 1920px) {
.the-button {
    font-size: 11px;
    letter-spacing: 0.25em;
    padding: 11px 40px 0 40px;
  }
}

@media only screen and (max-width: 640px) {
.the-button {
    font-size: 10px;
    letter-spacing: 0.10em;
  }
}

.the-button.the-button-light {
  color: #fff;
}

.the-button.the-button-dark {
  color: #2e2e2e;
}

.the-button:hover:before {
  width: 100%;
}

.the-button:hover:after {
  width: 100%;
}

.the-button::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 38px;
  top: -2px;
  left: -6px;
  border: 1px solid #ff264a;
  border-right: none;
  -webkit-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
  -ms-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  transition: all 0.5s linear;
}

@media all and (min-width: 1920px) {
.the-button::before {
    width: 20px;
    height: 47px;
    top: -5px;
  }
}

@media only screen and (max-width: 640px) {
.the-button::before {
    width: 15px;
    height: 38px;
    top: -2px;
  }
}

.the-button.the-button-light::before {
  border: 1px solid #fff;
  border-right: none;
}

.the-button.the-button-dark::before {
  border: 1px solid #2e2e2e;
  border-right: none;
}

.the-button::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 38px;
  top: -2px;
  right: -6px;
  border: 1px solid #ff264a;
  border-left: none;
  -webkit-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
  -ms-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  transition: all 0.5s linear;
}

@media all and (min-width: 1920px) {
.the-button::after {
    width: 20px;
    height: 47px;
    top: -5px;
  }
}

@media only screen and (max-width: 640px) {
.the-button::after {
    width: 15px;
    height: 38px;
    top: -2px;
  }
}

.the-button.the-button-light::after {
  border: 1px solid #fff;
  border-left: none;
}

.the-button.the-button-dark::after {
  border: 1px solid #2e2e2e;
  border-left: none;
}

.the-button-submit {
  width: 175px;
  top: -19px;
  border: none;
}

@media all and (min-width: 1920px) {
.the-button-submit {
    width: 205px;
    border: none;
  }
}

@media only screen and (max-width: 640px) {
.the-button-submit {
    width: 175px;
    top: -19px;
  }
}

.contact-modal-launcher-wrapper,
.contact-form-submit-wrapper {
  position: relative;
  width: 205px;
  height: auto;
  line-height: 1.5;
  padding: 0;
  left: 0;
}

.contact-modal-launcher-wrapper {
  margin: -4px auto 0 auto;
}

.contact-form-submit-wrapper {
  margin: 42px auto -6px auto;
}

@media all and (min-width: 1920px) {
.contact-form-submit-wrapper {
    margin: 42px auto -2px auto;
  }
}


*/
//# sourceMappingURL=News.styled.d.ts.map