import React from "react";
import Form from 'react-bootstrap/Form';


export default class SmokerForm extends React.Component {

    
    render() {
    if (this.props.isSmoking==="Yes") { 
    return(
    <Form.Group controlId="formSmoker">
    <Form.Label className="text-muted text-left margin-bottom dark">How often do you smoke?</Form.Label>
        <Form.Control as="select" multiple onChange={this.props.handleFrequencySmoking}>
        <option>Many times a day</option>
        <option>A few times a week</option>
        <option>From time to time</option>
        </Form.Control>
    </Form.Group>        
    ) 
    } else return null;
    }
}