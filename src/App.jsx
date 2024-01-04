import Sidebar from './components/sidebar'
import './App.css'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";


//hamburguer
import { CiLogout, CiSearch } from "react-icons/ci";
//search
import { MdGridView } from "react-icons/md";
//grid
import { IoPawOutline } from "react-icons/io5";
//paw
import { IoPersonOutline } from "react-icons/io5";
//person
import { FaUserDoctor } from "react-icons/fa6";
//doctor
import { IoSettingsOutline } from "react-icons/io5";
//setings
import { RiLogoutBoxLine } from "react-icons/ri";


const H2 = styled.h2`
display: flex;
color: #084236;
font-family: Poppins;
font-size: 25px;
font-style: normal;
font-weight: 500;
line-height: normal;


`;

const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Titulo = styled.h2`
color: #084236;
font-family: Poppins;
font-size: 20px;
font-weight: 400;
position: absolute;
left: 80px;
top: 10px;
opacity: ${props => (props.isSidebarActive ? 0 : 1)};
`;

const ConteinerSidebar = styled.div`
width: 60px;
height: 100%;
background-color: #18C29C;
left: 0;
top: 0;
position: fixed;
display: flex;
flex-direction: column;
`;

const ConteinerSearch = styled.div`
background-color: #DCE4E3;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
margin: 10px 0 10px 0;
`;

const ConteinerIcons = styled.div`
background-color: #18C29C;
margin-bottom: 10px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px;

& svg{
  background-color: #18C29C;
}
`;

const ConteinerLogout = styled.div`
width: 100%;
height: 40px;
background-color: rgba(220, 228, 227, 0.60);
display: flex;
align-items: center;
justify-content: center;
position: absolute;
 bottom: 0;


& svg {
  
  background-color: transparent;
  }

`;
const ConteinerHamburger = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #18C29C;


& svg {
  margin-top: 10px;
  background-color: #18C29C;
  }

`;

const ConteinerSearch1 = styled.div`
width: 100%;
background-color: #18C29C;
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;

`;

function App() {
  
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => setSidebar (!sidebar)
  return (
    <>
    <ConteinerSidebar>
    <ConteinerHamburger>
    <RxHamburgerMenu size={30} color="#084236" onClick={ShowSidebar}/>
    </ConteinerHamburger>

<ConteinerSearch1>
    <ConteinerSearch>
    <CiSearch size={30} color="#084236"/>
    </ConteinerSearch>
</ConteinerSearch1>
    <ConteinerIcons>
    <MdGridView size={30} color="#084236"/>
    </ConteinerIcons>
    <ConteinerIcons>
    <IoPawOutline size={30} color="#084236"/>
    </ConteinerIcons>
    <ConteinerIcons>
    <IoPersonOutline size={30} color="#084236"/>
    </ConteinerIcons>
    <ConteinerIcons>
    <FaUserDoctor size={30} color="#084236"/>
    </ConteinerIcons>
    <ConteinerIcons>
    <IoSettingsOutline size={30} color="#084236"/>
    </ConteinerIcons>
  <ConteinerLogout>    
    <CiLogout size={30} color="#084236"/>
    </ConteinerLogout>
   {sidebar && <Sidebar active={setSidebar}/>}
   </ConteinerSidebar>

   <Titulo isSidebarActive={sidebar}>Dashboard</Titulo>
   
    </>
  )
}

export default App
