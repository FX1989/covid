import React  from "react";
import Form from 'react-bootstrap/Form';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


export default class SmokerForm extends React.Component {

    
    render() {
    if (this.props.isRetired==="Yes") {
    return ( 
      <Form> 
        <Form.Group>
          <Form.Label className="text-muted text-left margin-bottom dark">
            How many days per week do you exercice?
          </Form.Label>
          <RangeSlider
            value={this.props.DaysExercice}
            onChange={this.props.handleExerciceDays}
            min={0}
            max={7}
            variant='primary'
          />
        </Form.Group>   
      </Form>
    );
  
  } else return null;
}}