import { RiLogoutBoxLine } from "react-icons/ri";
import styled from "styled-components";
import Photo from '../images/photo.jpg'

const ConteinerAccount = styled.div`
display: flex;
align-items: center;
width: 200px;
height: 60px;
background-color: #8ED7C6;

`;
const ConteinerImgPerson = styled.div`
background-color: transparent;
height: 100%;
align-items: center;
margin: 12px 20px 0 5px;

`;

const Imgperson = styled.img`
border-radius: 5px;
display: flex;
align-items: center;
width: 50px;
height: 40px;
background-color: transparent;


`;

const NamePerson = styled.h2`
background-color: transparent;
color: #084236;
font-family: Poppins;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;

const Profession = styled.p`
background-color: transparent;
color:  #084236;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;

const Names = styled.div`
background-color: #8ED7C6;

`;

const Conteinersvg = styled.div`
background-color: #8ED7C6;
margin-left: 15px;
display: flex;
justify-content: flex-end;
align-items: center;
& svg{
    background-color: #8ED7C6;
}

`;
const AccountDetails = ()=>{
    return(
        <>

        <ConteinerAccount>
            <ConteinerImgPerson>
            <Imgperson src={Photo} alt="Foto de perfil"/>
            </ConteinerImgPerson>
            <Names>
            <NamePerson>Eleanor Pena</NamePerson>
            <Profession>Veterinária</Profession>
            </Names>
            <Conteinersvg>
              <RiLogoutBoxLine size={25} color="#084236"/> 

            </Conteinersvg>
        </ConteinerAccount>


        </>
    )
}

export default AccountDetails;

