import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import Compteur from "./components/Compteur";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: [
        {
          fullName: "Alyani Asma",
          bio: "Go My Code Student ",
          profession: "Fullstack Web Developer",
        },
      ],
      isShow: false,
    };
  }
  showProfil = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="title">Profile</h1>
        {this.state.Person.map((el, index) => (
          <Card className="hard" key={index} style={{ width: "16rem" }}>
            {this.state.isShow ? (
              <div>
                <Card.Body>
                  <Card.Title>{el.fullName}</Card.Title>
                  <Card.Text>{el.bio}</Card.Text>
                  <Card.Text>{el.profession}</Card.Text>
                </Card.Body>
              </div>
            ) : (
              <p className="para">
                Click on show Profile
                <Compteur />
              </p>
            )}
            <Button
              variant={this.state.isShow ? "warning" : "info"}
              onClick={this.showProfil}
            >
              {" "}
              {this.state.isShow ? "Hide Profil" : "Show Profil"}{" "}
            </Button>
          </Card>
        ))}
      </div>
    );
  }
}

export default App;