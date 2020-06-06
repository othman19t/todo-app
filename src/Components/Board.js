import React, { useState } from 'react';
import fire from '../fireBase';
import { Button, Card} from 'react-bootstrap';


function Board(props) {
  console.log(props.cardInfo)

  
  const renderCard = (card, index) => {
    const handleAdding = () => {
      console.log(card.cardList)

      
    }
      return (
        
        <Card style={{ width: "18rem" }} key={index} className="col col-md-4">
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <button onClick={handleAdding}>add list</button>
          </Card.Body>
        </Card>
      );
    };

  return (
      <div className="row">
          {props.cardInfo.map(renderCard)}

      </div>
  )
}


export default Board;


//             {/* <>
//   <Navbar bg="dark" variant="dark">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
// </DropdownButton>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-info">Search</Button>
//     </Form>
//   </Navbar>
//   <br />

// </> */}


// const [Text, setText] = useState([{
  //   title: "Basil",
  //   text: "THE Majd",
  //   cardList: []
  // },]);

  // const [Form, setshowForm] = useState(false)


  // const handleClick = (e) => {
  //   e.preventDefault()

  //   setText(prevState => [...prevState, {
  //     title: InputState,
  //     text: "THE Majd",
  //     cardList: []
  //   },])
  //   setshowForm(false)
  // }

  // return (
  //   <div> 
  //     <form onSubmit={handleClick} id= "add-app">
  //       <label>Board Name : </label>
  //       <input type="text" onChange={e => setInputState(e.target.value)}/>
  //       <button type="submit">Create</button>
  //     </form>
  //   </div>
  //   );