import React from 'react';
import Gallery from './Gallery';
function Home() {
    return (
      <>
  <section id="center">
    <div className="clearfix">
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
          <li data-target="#carousel-example-generic" data-slide-to={1} className />
          <li data-target="#carousel-example-generic" data-slide-to={2} className />
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img src="img/wall.jpg" alt="First slide" height={800} width={1600} />
            <div className="carousel-caption">
            </div>
          </div>
          <div className="item">
            <img src="img/waal.jpg" alt="Second slide" height={800} width={1600} />
            <div className="carousel-caption">
            </div>
          </div>
          <div className="item">
            <img src="img/wal3.jpg" alt="Third slide" />
            <div className="carousel-caption">
            </div>
          </div>
        </div>
      </div>
      <div className="main-text hidden-xs">
        <div className="col-md-12">
          <div className="col-sm-4">
            <div className=" center_slide">
              <h1>Are you an <br />art lover?</h1>
              <p>We hope so!</p>
              <h4> <a href="#">GET REGISTER</a></h4>
              <h6><a href="#">Let's dive into the ART WORLD<i className="fa fa-play-circle" /></a></h6>
            </div>
          </div>
          <div className="col-sm-3" />
          <div className="col-sm-5">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="deals_page">
    <div className="container">
      <div className="row">
        <div className="deals_page clearfix">
          <div className="col-sm-6">
            <div className="deals_page_left bg_1 clearfix">
              <div className="col-sm-5">
                <div className="deals_page_left_1 card-image">
                  <a href="#"><img src="img/new/new4.jpg" width="100%" height="185px" /></a>
                </div>
              </div>
              <div className="col-sm-7 space_left">
                <div className="deals_page_left_2">
                  <h6>Running</h6>
                  <h3><a href="#">Illustration portrait I</a></h3>
                  <p>Feminism</p>
                  <div className="clearfix deals_page_left_2_inner">
                    <a className="tag_1" href="#">Get  Info</a>
                    <a className="tag_2" href="#">Get this Offer <i className="fa fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="deals_page_left clearfix">
              <div className="col-sm-5">
                <div className="deals_page_left_1 card-image">
                  <a href="#"><img src="img/new/new2.jpeg" width="100%" height="185px" /></a>
                </div>
              </div>
              <div className="col-sm-7 space_left">
                <div className="deals_page_left_2">
                  <h6>Expire in 22 days</h6>
                  <h3><a href="#">Palette knife portrait</a></h3>
                  <p>Feminism</p>
                  <div className="clearfix deals_page_left_2_inner">
                    <a className="tag_1" href="#">Get  Info</a>
                    <a className="tag_2" href="#">Get this Offer <i className="fa fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="deals_page clearfix">
          <div className="col-sm-6">
            <div className="deals_page_left  clearfix">
              <div className="col-sm-5">
                <div className="deals_page_left_1 card-image">
                  <a href="#"><img src="img/new/new3.jpg" width="100%" height="185px" /></a>
                </div>
              </div>
              <div className="col-sm-7 space_left">
                <div className="deals_page_left_2">
                  <h6>Expire in 12 days</h6>
                  <h3><a href="#">Peaceful</a></h3>
                  <p>Feminism</p>
                  <div className="clearfix deals_page_left_2_inner">
                    <a className="tag_1" href="#">Get  Info</a>
                    <a className="tag_2" href="#">Get this Offer <i className="fa fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="deals_page_left bg_1 clearfix">
              <div className="col-sm-5">
                <div className="deals_page_left_1 card-image">
                  <a href="#"><img src="img/new/new1.jpg" width="100%" height="185px" /></a>
                </div>
              </div>
              <div className="col-sm-7 space_left">
                <div className="deals_page_left_2">
                  <h6>Expire in 600 days</h6>
                  <h3><a href="#" >Illustration portrait II</a></h3>
                  <p>Feminism</p>
                  <div className="clearfix deals_page_left_2_inner">
                    <a className="tag_1" href="#">Get  Info</a>
                    <a className="tag_2" href="#">Get this Offer <i className="fa fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="deals_page clearfix">
          <div className="col-sm-6">
            <div className="deals_page_left bg_1 clearfix">
              <div className="col-sm-5">
                <div className="deals_page_left_1 card-image">
                  <a href="#"><img src="img/new/new5.png" width="100%" height="185px" /></a>
                </div>
              </div>
              <div className="col-sm-7 space_left">
                <div className="deals_page_left_2">
                  <h6>Expire in 666 days</h6>
                  <h3><a href="#">Fishes portrait</a></h3>
                  <p>Aquarium</p>
                  <div className="clearfix deals_page_left_2_inner">
                    <a className="tag_1" href="#">Get  Info</a>
                    <a className="tag_2" href="#">Get this Offer <i className="fa fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="deals_page_left clearfix">
              <div className="col-sm-5">
                <div className="deals_page_left_1 card-image">
                  <a href="#"><img src="img/new/neww6.jpg" width="100%" height="185px" /></a>
                </div>
              </div>
              <div className="col-sm-7 space_left">
                <div className="deals_page_left_2">
                  <h6>Expire in 14 days</h6>
                  <h3><a href="#">Radhe Krishna portrait</a></h3>
                  <p>Goddess</p>
                  <div className="clearfix deals_page_left_2_inner">
                    <a className="tag_1" href="#">Get  Info</a>
                    <a className="tag_2" href="#">Get this Offer <i className="fa fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="collection_detail">
    <div className="container">
      <div className="row">
        <div className="collection_detail clearfix">
          <h3>KNOW THE CATEGORIES</h3>
          <p> Our line of galleries includes landscape, portrait, abstract, and
            fine art photography. Our prints are distinguished by their subject matter.
            A Creative Tales print might be a painting or a drawing, and it might have
            undergone digital editing by the artist as part of her or his artistic method. </p>
        </div>
        <div className="collection_detail_1  collection_detail_home clearfix">
          <div className="col-sm-4 space_left">
            <div className="collection_detail_1_left clearfix">
              <div className="grid clearfix">
                <figure className="effect-marley">
                  <img src="img/new/pic 1.jpeg" alt="img12" height={300} width={400} />
                  <figcaption>
                    <h2>Creative Tales</h2>
                    <p>Know more about us..</p>
                    <a href="#">View more</a>	</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="collection_detail_1_right">
              <h2>Take:Ahead</h2>
              <p>Our line of galleries includes landscape, portrait, abstract, and fine art photography. Our prints are distinguished by their subject matter.
                A Creative Tales print might be a painting or a drawing, and it might have undergone digital editing by the artist as part of her or his artistic method. </p>
              <h4><a href="#">READ MORE</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="connect" className="gallery_page">
    <div className="container">
      <div className="row">
        <div className="connect clearfix">
         <button href="/gallery"><h2>
           <Gallery/>
           GALLERY</h2></button> 
        </div>
        <div className="connect_1 clearfix">
          <div className="gallery">
            <a href className="big"><img src="img/new/pict5.jpeg" alt title="Beautiful Image" height={300} width={300} /></a>
            <a href><img src="img/new/download.jpeg" alt title height={300} width={300} /></a>
            <a href><img src="img/new/picc2.jpg" alt title="Beautiful Image" /></a>
            <a href><img src="img/new/new6.jpg" alt title /></a>
            <div className="clear" />
            <a href="img/22.jpg"><img src="img/new/12.jpg" alt title /></a>
            <a href="img/23.jpg"><img src="img/new/jj.jpg" alt title /></a>
            <a href="img/24.jpg" className="big"><img src="img/new/pic2.jpg" alt title /></a>
            <a href="img/25.jpg"><img src="img/new/ff.jpg" alt title /></a>
            <div className="clear" />
            <a href="img/26.jpg" className="big"><img src="img/new/pic4.jpg" alt title /></a>
            <a href="img/27.jpg"><img src="img/new/feather 1.jpg" alt title /></a>
            <a href="img/28.jpg"><img src="img/new/pp.jpg" alt title /></a>
            <a href="img/29.jpg"><img src="img/new/tree.jpg" alt title /></a>
            <div className="clear" />
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
    );
}

export default Home;