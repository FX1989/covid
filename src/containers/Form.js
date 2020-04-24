import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import SmokerForm from '../components/SmokerForm';
import ExerciceSlider from '../components/RetiredForm';



    
export default class CovidForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isSmoking: "No",
          isRetired: "No",
          age:'0',
          conditions:[],
          DaysExercice:'',
          FrequencySmoking:'',
          score: ''
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleRetirement = this.handleRetirement.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
    }

    handleOptionChange (e) {
        this.setState({
        isSmoking: e.target.value
        });
      }

      handleFrequencySmoking (e) {
        this.setState({
        FrequencySmoking: e.target.value
        });
      }

      handleRetirement (e) {
        this.setState({
        isRetired: (e.target.value > 60)? "Yes":"No"
        });
      }

      handleExerciceDays (e) {
        this.setState({
        DaysExercice: e.target.value
        });
      }

      calculateScore (e) {
      this.setState({
      score: "1"
      });
      }
    


render() {
    return(
<div>
  <Form>
    <Form.Group controlId="formName">
    <Form.Row>
        <Col>
        <Form.Control placeholder="First name (optional)" />
        </Col>
        <Col>
        <Form.Control placeholder="Last name (optional)" />
        </Col>
    </Form.Row>
    </Form.Group>
  <Form.Group controlId="formAge">
    <Form.Label className="text-muted text-left margin-bottom dark">Age</Form.Label>
    <Form.Control type="number" placeholder="Enter age" onChange={this.handleRetirement} />
  </Form.Group>
  <Form.Group controlId="formDisease">
  <Form.Label className="text-muted text-left margin-bottom dark">Do you have pre-existing conditions?</Form.Label>
    <Form.Control as="select" multiple>
      <option>Asthma</option>
      <option>Heart conditions</option>
      <option>Obesity</option>
      <option>Cancer</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="formSmoke">
  <Form.Label className="text-muted text-left margin-bottom dark">Do you smoke?</Form.Label>
  <div key={`inline-radio`} className="mb-3">
      <Form.Check inline type="radio" label="Yes" id="formSmoke1" className="text-muted text-left margin-bottom margin-right dark"
      value="Yes"
      onChange={this.handleOptionChange}
      checked={this.state.isSmoking==="Yes"}/>
      <Form.Check inline label="No" type="radio"  id="formSmoke2" className="text-muted text-left margin-bottom margin-right dark"
      value="No"
      onChange={this.handleOptionChange}
      checked={this.state.isSmoking==="No"} />
    </div>
  </Form.Group>
  <ExerciceSlider isRetired={this.state.isRetired}/>
  <SmokerForm isSmoking={this.state.isSmoking}/>       
  <Button variant="primary" type="button" onClick={e => this.calculateScore(e)} >
    Submit
  </Button>
</Form>
<div className="text-muted text-left margin-bottom dark">
Your score is {this.state.score}
</div>
</div>
    )}
      }
    
