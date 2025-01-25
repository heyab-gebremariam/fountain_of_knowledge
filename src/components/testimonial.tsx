import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

export const Testimonial = () => {
  const testimonialOptions = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-3">Our Clients Say!</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.
            Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        <OwlCarousel className="owl-theme testimonial-carousel wow fadeInUp" {...testimonialOptions}>
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est
              stet ea lorem amet est kasd kasd erat eos
            </p>
            <div className="d-flex align-items-center bg-white me-n5">
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src="/theme/img/testimonial-1.jpg"
                alt="Client 1"
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name</h3>
                <span>Profession</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est
              stet ea lorem amet est kasd kasd erat eos
            </p>
            <div className="d-flex align-items-center bg-white me-n5">
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src="/theme/img/testimonial-2.jpg"
                alt="Client 2"
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name</h3>
                <span>Profession</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
          <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est
              stet ea lorem amet est kasd kasd erat eos
            </p>
            <div className="d-flex align-items-center bg-white me-n5">
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src="/theme/img/testimonial-3.jpg"
                alt="Client 3"
              />
              <div className="ps-3">
                <h3 className="mb-1">Client Name</h3>
                <span>Profession</span>
              </div>
              <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};