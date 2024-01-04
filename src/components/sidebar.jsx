import styled from "styled-components";
import AccountDetails from "./Accountdetails";
import Logo from "../images/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdGridView } from "react-icons/md";
import { IoPawOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";


const StyledLogo = styled.img`
  width: 60px;
  background-color: #18C29C;

  & svg{
    background-color: #18C29C;
  }
`;



export const Conteiner = styled.div`
height: 100%;
width: 200px;
background-color: #18C29C;
position: fixed;
top: 0px;
left: 0px;
left: ${props => props.isSidebarActive ? '0' : '-100%'};
animation: showSidebar .4s;

@keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 200px;
    }
  }
`;

const Boxsidebar = styled.div`
z-index: 1;
position: fixed;

`;
const BoxConta = styled.div`
width: 190px;
padding-left: 7px;
 background-color: #18C29C;
 display: flex;
 justify-content: space-between;
&svg{
    background-color: #18C29C;
  }
`;

const BoxHamburger = styled.div`
background-color: #18C29C;
margin: 7px 10px 0 0;

& svg{
  background-color: #18C29C;
}
`;

const ConteinerSearch = styled.div`
background-color: #18C29C;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-top: 15px;



`;

const Search = styled.div`
background-color: #8ED7C6;
width: 10rem;
height: 30px;
border-radius: 10px;
display: flex;
margin-left: 13px;
padding-top: 7px;
& svg{
  
  background-color: transparent;
 
}

`;


const Conteinersettings = styled.div`

background-color: #18C29C;
display: flex;
padding: 15px 0 15px 20px;


& svg {
  
  background-color: transparent;
  }

`;

const ConteinerDoctor = styled.div`

background-color: #18C29C;
display: flex;
padding: 15px 0 15px 20px;
& svg {
  
  background-color: transparent;
  }

`;

const ConteinerPerson = styled.div`

background-color: #18C29C;
display: flex;
padding: 15px 0 15px 20px;
& svg {
  
  background-color: transparent;
  }

`;

const ConteinerPaw = styled.div`

background-color: #18C29C;
display: flex;
padding: 15px 0 15px 20px;
& svg {
  
  background-color: transparent;
  }

`;

const Conteinergrid = styled.div`

background-color: #18C29C;
display: flex;
padding: 15px 0 15px 20px;
& svg {
  
  background-color: transparent;
  }

`;

const Titulo = styled.h3`
color: #084236;
font-family: Poppins;
font-size: 18px;
font-weight: 400;
background-color: transparent;
margin-left: 15px;

`;


const Dashboard= styled.h2`
color: #084236;
font-family: Poppins;
font-size: 20px;
font-weight: 400;
position: absolute;
top: 10px;
left: 215px;
`;

const Conteineraccount = styled.div`
position: fixed;
bottom: 0;
`;


const Sidebar = ({ active})=>{
    const Closesidebar =()=>{
        active(false)
       }
    return(
        <>
        <Conteiner isSidebarActive={active}>
        <BoxConta>
  <StyledLogo src={Logo} alt="logo"/> 
<BoxHamburger>
  <RxHamburgerMenu size={25} color="#084236" onClick={Closesidebar}/>
  </BoxHamburger>
   </BoxConta>
        
 

 <Boxsidebar>
  <ConteinerSearch>
  <Search>
  <CiSearch size={25} color="#084236"/>
  <Titulo>Buscar</Titulo>
  </Search>
  </ConteinerSearch>
  <Conteinergrid>
  <MdGridView size={25} color="#084236"/>
  <Titulo>Dashboard</Titulo>
  </Conteinergrid>
  <ConteinerPaw>
  <IoPawOutline size={25} color="#084236"/>
  <Titulo>Pets</Titulo>
  </ConteinerPaw>
  <ConteinerPerson>
  <IoPersonOutline size={25} color="#084236"/>
  <Titulo>Clientes</Titulo>
</ConteinerPerson>

  <ConteinerDoctor>
  <FaUserDoctor size={25} color="#084236"/>
  <Titulo>Vets</Titulo>
  </ConteinerDoctor>
  <Conteinersettings>
  <IoSettingsOutline size={25} color="#084236"/>
  <Titulo>Ajutes</Titulo>
  </Conteinersettings>
 
<Conteineraccount>
<AccountDetails/>
</Conteineraccount>

 </Boxsidebar>

<Dashboard>Dashboard</Dashboard>
        </Conteiner>
        
        </>
    )
}

export default Sidebar;