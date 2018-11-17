import React, { Component } from 'react';
import { takeAppointment } from "./service/take_appointment";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '11/17/2018 13:10:00'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleAppointment = async (data) => {
    const response = await takeAppointment(data);
    console.log(response);
    console.log(data.value);
  }

  render() {
    const appointmentData = {
        action: "post_confirmation",
        app_email: "teste@teste.com",
        app_gcal: 1,
        app_name: "teste",
        app_phone: "43423423423",
        nonce: "422dc7cb2c",
        value: parseDate(this.state.value)
    }

    return (
        <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button onClick={() => this.handleAppointment(appointmentData)}>Agendar</button>
        </div>
    );
  }
}

const parseDate = date => `0:1:0:${toTimestamp(date)}:${toTimestamp(date)+600}:195`

const toTimestamp = (strDate) => {
    const datum = Date.parse(strDate);
    return datum/1000 - 7200;
}

export default App;
