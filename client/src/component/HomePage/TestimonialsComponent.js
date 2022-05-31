import React, { Component } from "react";
// import { Row, div, Container } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { agentService } from "../../services/AgentService";

export class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: [],
      addAgents: [],
      bioDisplay: "",
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    const addAgents = await agentService.addAgents(agentObject);
    this.setState({ addAgents });
    this.setState({ bioDisplay: "none" });
  }

  render() {
    // eslint-disable-next-line no-restricted-globals
    console.log(document.documentElement.clientWidth);
    // eslint-disable-next-line no-restricted-globals
    const cMode = () => {
      if (document.documentElement.clientWidth > 690) {
        return true;
      } else {
        return false;
      }
    };
    // eslint-disable-next-line no-restricted-globals
    const cSliderPercent = () => {
      if (document.documentElement.clientWidth > 690) {
        return 33;
      } else {
        return 100;
      }
    };
    return (
      <div>
        <h1 style={{ marginBottom: "0px", fontSize: "300%", marginTop: "3%" }}>
          <strong>Testimonials</strong>
        </h1>
        <div
          style={{
            backgroundColor: this.props.agent.primaryColor,
            height: "2px",
            // position: "absolute",
            // top: "20%",
            width: "50vw",
            marginBottom: "1%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Carousel
              showIndicators={false}
              showArrows={false}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={6100}
              centerMode={cMode()}
              centerSlidePercentage={cSliderPercent()}
              key={ag.toString()}
              style={{
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  marginBottom: "15%",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <img
                  src="https://qyctrtcwtwasdktftmuy.supabase.co/storage/v1/object/public/images/BigBird.jpg"
                  alt="Big Bird"
                />
                <h1 style={{ color: "black" }}>Big Bird</h1>
                <h3 style={{ color: "black" }}>Avian Advocate</h3>

                <p style={{ color: "black" }}>
                  “She sold me my house, and now I live in it!”
                </p>
              </div>
              <div
                style={{
                  marginBottom: "15%",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <img
                  src="https://qyctrtcwtwasdktftmuy.supabase.co/storage/v1/object/public/images/CookieMonster.jpg"
                  alt="Cookie Monster"
                />
                <h1 style={{ color: "black" }}>Cookie Monster</h1>
                <h2 style={{ color: "black" }}>Cookie Connoisseur</h2>

                <p style={{ color: "black" }}>
                  “More storage for my cookies.  Thanks Mary!”
                </p>
              </div>
              <div
                style={{
                  marginBottom: "15%",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <img
                  src="https://qyctrtcwtwasdktftmuy.supabase.co/storage/v1/object/public/images/CountVonCount.jpg"
                  alt="Count Von Count"
                />
                <h1 style={{ color: "black" }}>Count Von Vount</h1>
                <h2 style={{ color: "black" }}>Number Vampire</h2>

                <p style={{ color: "black" }}>
                  “You can <strong>COUNT</strong> on Mary!”
                </p>
              </div>
              <div
                style={{
                  marginBottom: "15%",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <img
                  src="https://qyctrtcwtwasdktftmuy.supabase.co/storage/v1/object/public/images/Elmo.jpg"
                  alt="Elmo"
                />
                <h1 style={{ color: "black" }}>Elmo</h1>
                <h2 style={{ color: "black" }}>Small Red Muppet</h2>

                <p style={{ color: "black" }}>
                  “Where am I?”
                </p>
              </div>
            </Carousel>
          ))}
      </div>
    );
  }
}
