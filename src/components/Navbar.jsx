import PropTypes from 'prop-types';
import NavButton from './NavButton';

const NavBar = ({ activeButton, setActiveButton }) => {
  return (
    <nav
      className="hidden items-start justify-center lg:flex flex-wrap"
      aria-label="In-page jump links"
    >
      <NavButton
        to="#about"
        navButtonName="ABOUT"
        activeClass={activeButton === 'ABOUT' ? 'underline' : ''}
        onClick={() => setActiveButton('ABOUT')}
      />
      <NavButton
        to="#experience"
        navButtonName="EXPERIENCE"
        activeClass={activeButton === 'EXPERIENCE' ? 'underline' : ''}
        onClick={() => setActiveButton('EXPERIENCE')}
      />
      <NavButton
        to="#projects"
        navButtonName="PROJECT"
        activeClass={activeButton === 'PROJECT' ? 'underline' : ''}
        onClick={() => setActiveButton('PROJECT')}
      />
    </nav>
  );
};

NavBar.propTypes = {
  activeButton: PropTypes.string.isRequired,
  setActiveButton: PropTypes.func.isRequired
};


export default NavBar;
