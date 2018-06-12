import React from 'react';
import Row from './../framework/row.jsx';
import Container from './../framework/Container.jsx';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hello world!",
      tempListText: "",
      itemList: []
    };

    this.handleListTextChange = this.handleListTextChange.bind(this);
    this.handleListBtnClick = this.handleListBtnClick.bind(this);
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="col-md-12">
              <h1>
                {this.state.title}
              </h1>
            </div>
          </Row>
          <Row>
            <div className="col-md-12">
              <input type="text"
                name="listText"
                className="form-control"
                placeholder="Write something"
                value={this.state.tempListText}
                onChange={this.handleListTextChange} />
              <br />
              <button className="btn btn-primary" onClick={this.handleListBtnClick}> Spara</button>
            </div>
          </Row>
          <br />
          <Row>
            <div className="col-md-12">
              <ul className="list-group">
                {this.state.itemList.map((item) =>
                  <li className="list-group-item">{item}</li>
                )}
              </ul>
            </div>
          </Row>
        </Container>
      </div>);
  }


  handleListTextChange(event) {
    this.setState({ tempListText: event.target.value });
  }
  handleListBtnClick(event) {
    if (this.state.tempListText) {
      this.state.itemList.push(this.state.tempListText);
      this.setState({ tempListText: "" });
    }
  }
}