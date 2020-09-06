import React, { Fragment, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import {PlusOutlined} from "@ant-design/icons";
// import AppModal from './AddModal';
import AppDrawer from './AddDrawer';

// function App() {
//   const [showModal, setShowModal] = useState(false)
//   return (
//    <Fragment>
//       <Button 
//         type="primary" icon={<PlusOutlined/>} 
//         data-testid="add-contact-button"
//         onClick={()=>setShowModal(true)}>
//         Add
//       </Button>

//       <AppModal 
//         data-testid="add-contact-modal" 
//         show={showModal} 
//         handleOnClose={()=>setShowModal(false)}
//       />
//    </Fragment>
//   );
// }

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
   <Fragment>
      <Button 
        type="primary" icon={<PlusOutlined/>} 
        data-testid="add-contact-button"
        onClick={()=>setShowModal(true)}>
        Add
      </Button>

      <AppDrawer 
        data-testid="add-contact-modal" 
        show={showModal} 
        handleOnClose={()=>setShowModal(false)}
      />
   </Fragment>
  );
}


export default App;
