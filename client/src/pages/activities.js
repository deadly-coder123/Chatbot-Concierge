import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import ReactDOM from 'react-dom';
import SliderBar from '../components/Slider'
import { SubmitBtn } from '../components/Button/button'
import { Container, Row, Col } from '../components/Grid'
import ActivityCard from '../components/ActivityCards'
import '../components/Slider/style.css'
import '../pages/activities.css'



class Activities extends Component {

constructor(props) {
        super(props);
        this.state = { 
            answers:{
                image: "",
                description: "",
                city: "",
                kids: "",
                duration: "",
                location: "",
                active: "",
                price: ""
            },
               displayAnswers: false
        }
 }

  
    handleOnChange = (value) => {
        this.setState({
            image: value,
            description: value,
            city: value,
            kids: value,
            duration: value,
            location: value,
            active: value,
            price: value

        })
}
    render() {
        return (
        <div className ="Wrapper">
            <Container>
                <Row>
                    <Col size="md-3">
                       <h1 className="titleQ">WHAT TYPE OF ACTIVITY SHOULD WE PLAN?</h1> 
                    </Col>
                    <Col size="md-2">
                        <h6 className="descriptionsRight">Kids</h6><br></br>
                        <h6 className="descriptionsRight">An hour</h6><br></br>
                        <h6 className="descriptionsRight">Indoors</h6><br></br>
                        <h6 className="descriptionsRight">Sloth</h6><br></br>
                        <h6 className="descriptionsRight">Budget Friendly</h6><br></br>
                    </Col>

                    <Col size="md-5">
                        <p>Kid Friendly?</p>
                        <SliderBar />
                        <p>Duration?</p>
                        <SliderBar />
                        <p>Location?</p>
                        <SliderBar />
                        <p>Activity Level?</p>
                        <SliderBar />
                        <p>Price?</p>
                        <SliderBar />
                        <SubmitBtn />
                    </Col>
                    <Col size="md-2">
                        <h6 className="descriptionsLeft">Cocktails</h6><br></br>
                        <h6 className="descriptionsLeft">All day</h6><br></br>
                        <h6 className="descriptionsLeft">Outdoors</h6><br></br>
                        <h6 className="descriptionsLeft">Cheetah</h6><br></br>
                        <h6 className="descriptionsLeft">Living Large</h6><br></br>
                    </Col>
        
                </Row>
                <ActivityCard />
            </Container>
         </div>
        )
    }
}






export default Activities