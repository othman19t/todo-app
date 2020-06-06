import React, { useState, useEffect } from 'react';
import fire from '../fireBase';

import { Button,
            Card,
            Navbar,
            Nav,
            Form,
            FormControl,
            DropdownButton,
            Dropdown
        } from 'react-bootstrap';
import Board from '../Components/Board'
// const [Text, setText] = useState([{
//   title: "Basil",
//   text: "THE Majd",
//   cardList: []
// },]);

//const mydata = ()=>{
  //return(
    //fire.collection('posts').get()
  //)
//}



const fetchData = async () => {
  try{
    const res = await fire.collection('posts').get() //[]
    const posts =  res.docs.map(post => post.data() )
    //console.log(posts)
    return posts
  }
  catch(err) {
    console.log(err);
    
  }
}
// const data = setInterval(fetchData, 2000)

const data = fetchData().then((result) =>{
  return result
  //console.log(result);
  
})



function BoardContainer() {
  //MAIN OBBJECT STATE

const othman = () => {
  const [Text, setText] = useState(
    data
  )
}
setInterval(othman(), 1000)


  //FORM SHOW STATE 
  const [Form, setshowForm] = useState(false)
  //SAVES INPUT VALUE 
  const [InputState, setInputState] = useState("")

  const [post, setPost] = useState([])

  //SHOW AND HIDE BOARD FORM 
  // const showForm = () => {

  //   const handleClick = (e) => {
  //     e.preventDefault()
  //     fire.collection('posts').add({ 
  //       title: InputState,
  //       text: "THE Majd",
  //       cardList: []})
  //     setText(prevState => [...prevState, {
  //       title: InputState,
  //       text: "THE Majd",
  //       cardList: []
  //     },])
  //     setshowForm(false)
  //     fetchData()
  //   }

 

  //   return (
  //     <div> 
  //       <form onSubmit={handleClick} id= "add-app">
  //         <label>Board Name : </label>
  //         <input type="text" onChange={e => setInputState(e.target.value)}/>
  //         <button type="submit">Create</button>
  //       </form>
  //     </div>
  //     );
  // }

  // useEffect(() => {
  //   handlePostFirebase()
  // });
  //   const handlePostFirebase = e => {
  //     fire.collection('test').add({text: Text})
   
  // }


  // useEffect(() => {
  //   fetchData()
  //   console.log(post)
  // }, [])

  return (
      <div className="container">
          board container
          <Board cardInfo={Text} />
          <button onClick={() => setshowForm(true)}>Add board</button>
          {/* {Form ? showForm() : null} */}
          {/* <GetTest fetchData={fetchData}/> */}
      </div>
  )
}


export default BoardContainer;


            {/* <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />

</> */}