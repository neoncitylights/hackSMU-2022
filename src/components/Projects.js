import React,{ useState } from "react";
import { Form,Button } from "react-bootstrap";
import { Header } from "../App";
//import { sendMessage } from "./Message";


export function Projects() {
    const [number,setNumber] = useState(0);
    const [message,setMessage] = useState('');
      return (
        <div>
          <div className='app-content' style={{ height: '100vh' }}>
            <Header />
            <h2 className='mb-3'>Send a Project</h2>
            <Form onSubmit={console.log("Twilio Call")}>
              <Form.Group className='mb-3'>
                <Form.Control
                  className="search-bar"
                  style={{ width: '25ch' }}
                  type="number"
                  placeholder='ex: +1 123 456 7890'
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>
    
              <Form.Group className='mb-3'>
                <Form.Control
                  style={{ width: '25ch' }}
                  className="search-bar"
                  placeholder='Description'
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
    
              <Button className='autocomplete-button' variant="primary" type="Submit">
                Send to Friend
              </Button>
    
            </Form>
    
          </div>
    
        </div>
      );
    }