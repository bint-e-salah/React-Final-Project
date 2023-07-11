import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://contentstatic.techgig.com/photo/88544171/New-year-new-phone-Top-5-smartphones-to-launch-in-2022.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.designcafe.com/wp-content/uploads/2020/09/30173843/home-decor-ideas-for-living-room.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Home Decoration Product</h3>
          <p>Providing best affordable home decore products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a5g6m9g4.rocketcdn.me/wp-content/uploads/2023/01/SNA_TIM_LYS_HomePage.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Skin Care</h3>
          <p>
            You can find here world's best quality skincare producs with trust.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;