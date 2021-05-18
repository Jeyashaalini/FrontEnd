import React from 'react';
import Gallery from './Gallery';
import {Link} from "react-router-dom"
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
              <h4> <Link to ="signup">GET REGISTER</Link></h4>
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

  <section id="collection_detail">
    <div className="container">
      <div className="row">
        <div className="collection_detail clearfix">
          <h3>About our Gallery</h3>
          <p> Our line of galleries includes landscape, portrait, abstract, and
            fine art photography. Our prints are distinguished by their subject matter.
            A Visual Garden print might be a painting or a drawing, and it might have
            undergone digital editing by the artist as part of her or his artistic method. </p>
        </div>
        <div className="collection_detail_1  collection_detail_home clearfix">
          <div className="col-sm-4 space_left">
            <div className="collection_detail_1_left clearfix">
              <div className="grid clearfix">
                <figure className="effect-marley">
                  <img src="img/new/pic 1.jpeg" alt="img12" height={300} width={400} />
                  <figcaption id="fig">
                    <h2>Visual Garden</h2>
                    	</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="collection_detail_1_right">
              <h2>Take:Ahead</h2>
              <p>Our line of galleries includes landscape, portrait, abstract, and fine art photography. Our prints are distinguished by their subject matter.
                A Visual Garden print might be a painting or a drawing, and it might have undergone digital editing by the artist as part of her or his artistic method. </p>

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
         
        </div>
      </div>
    </div>
  </section>
  </>
    );
}

export default Home;
