import React, { useState } from 'react'
import styled from 'styled-components'
import BtnHamburger from './HamburgerButton/BtnHamburger'
import { FaBattleNet, FaShoppingCart } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y vice-versa
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                {/*Linea 18 -> se utiliza para dar por defecto un tamaño a los react-icons */}
                <IconContext.Provider value={{ style: { fontSize: "2rem" } }}>
                    <LogoContainer>
                        <FaBattleNet />
                        <p>-Solid3D-</p>
                    </LogoContainer>
                    <div className={`links ${clicked ? 'active' : ''}`}>
                        <a onClick={handleClick} href="#">Home</a>
                        <a onClick={handleClick} href="#" style={{ color: "green" }}>SHOP</a>
                        <a onClick={handleClick} href="#">Sobre mi</a>
                        <a onClick={handleClick} href="#">Contactame</a>
                        <FaShoppingCart style={{ cursor: "pointer" }} />
                    </div>
                    <div className='burguer'>
                        <BtnHamburger clicked={clicked} clickeo={handleClick} />
                    </div>
                    <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
                </IconContext.Provider>
            </NavContainer>
        </>
    )
}

export default Navbar

const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-family: sans-serif;
    color: #e079;
    p{
        margin-left: .5rem;
        color: #e07924
    }
`

const NavContainer = styled.nav`
padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;

h2{
    color: white;
    font-weight: 400;
    span{
    font-weight: bold;
    }
}
a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
    color: white;
    font-size: 2rem;
    display: block;
    }
    @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
        font-size: 1rem;
        color: white;
        display: inline;
    }
    display: flex;
    align-items: center;
    }
}
.links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
    font-size: 2rem;
    margin-top: 1rem;
    color: white;
    }
}
.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
`