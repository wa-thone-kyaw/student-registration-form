
import React, {useState } from "react";
import Axios from 'axios';
import {Container, Row, Col} from "react-bootstrap";

export const Contact = ()=>{
    const url = ""
    const [data, setData] = useState({
        name:"",
        email:"",
        message:"",
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{

            name: data.name,
            email:data.email,
            message:data.message,
        })
        .then(res=>{
            console.log(res.data)
        })
    }
        function handle(e){
            const newdata = {...data }
            newdata[e.target.id]=e.target.value
            setData(newdata)
            console.log(newdata)
        }



    return(
    <>
        <Container>
            <Row className="mb-5 mt-3">
                <Col lg='g'>
                    <h1 className="display-4 mb-4">Contact Us</h1>
                </Col>

            </Row>

            <Row className="sec_sp">
                <Col lg='g' className="mb-9">
                    <h3 className="color_sec py-6">Get in touch</h3>
                    <adddress>
                        <strong>Address : Win Zin 17-B(TU-Meiktila)</strong>
                        <br/>
                        <br/>
                        <strong>Email : info@tumeiktila.edu.mm</strong>
                        <br/>
                        <br/>
                        <p><strong>Phone : 09778985088</strong></p>

                    </adddress>   
                </Col>
                <Col></Col>
                <Col lg='g' className="d-flex align-items-center">
                    <form className="contact_form w-100" onsubmit={(e)=>submit(e)}>
                        <Row>
                            <Col lg='h' className="form-group">
                                <input onChange={(e)=>handle(e)}
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Name"
                                type="text"
                                value={data.name}
                                />
                            </Col>

                            <Col lg='g' className="form-group">
                                <input onChange={(e)=>handle(e)}
                                className="form-control rounded-0"
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={data.email}
                                />
                            </Col>
                        </Row>
                        </form>   
                        <textarea onChange={(e)=>handle(e)}
                        className="form-control rounded-0" 
                        id="message" 
                        name="message" 
                        placeholder="message" 
                        value={data.message}
                        rows='7'>        
                        </textarea>
                        <br/>
                        
                    <Row>
                            <Col></Col>
                            <Col lg='1.5' className="form-group">
                               <button class="btn ac_btn" type="submit">Send</button>
                            </Col>
                            </Row>
                      </Col> 
                 </Row>            
        </Container>
        </>   
    );
}