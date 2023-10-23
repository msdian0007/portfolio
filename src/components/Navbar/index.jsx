import React from 'react'
import { Title, Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, ThemeColor } from './NavbarStyledComponent'
import { FaCodeMerge } from 'react-icons/fa6';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { Bio } from '../../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';


const Navbar = ({ setDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <Title style={{ display: "flex", alignItems: "center", marginBottom: '20', cursor: 'pointer' }}>
            <FaCodeMerge size="3rem" /> <Span>Portfolio</Span>
          </Title>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <ButtonContainer>
            <ThemeColor onClick={() => setDarkMode(!darkMode)}>{darkMode ? <BsSun size='1rem' /> : <MdOutlineDarkMode size='1rem' />}</ThemeColor>
          </ButtonContainer>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank"><AiFillGithub size='2rem' /></GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank"><AiFillGithub /></GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar