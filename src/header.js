import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="warning" light expand="md">
          <NavbarBrand href="/" className='text-white'><span className="mb-0 h3">Keeper</span></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              
             
            
            </Nav> 
            
                <Button outline color='success' href="https://github.com/SankethGB">GitHub</Button>
            
           
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Example;