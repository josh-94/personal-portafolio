import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p> I'm a Front-end Web Developer with more than 1 year experience, passionated about creating
                            exceptional user experiences. With solid knowledge in HTML5, CSS3, JavaScript, React.js and Bootstrap. I am committed to the development of modern and functional user interfaces.
                            I have a good understanding of back-end programming languages and databases, as for example Python and MySQL</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="React JS" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>

                            <div className="item">
                                <img src={meter2} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>

                            <div className="item">
                                <img src={meter2} alt="Python" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt=" "/>
        </section>
      )
}