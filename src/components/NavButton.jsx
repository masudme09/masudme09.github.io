import PropTypes from 'prop-types';

const NavButton = props => {
  return (
    <div className="rounded">
      <a
        href={props.to}
        className={`text-white hover:text-secondary-dark font-bold py-2 px-4 ${props.activeClass}`}
        onClick={props.onClick}
      >
        {props.navButtonName}
      </a>
    </div>
  );
};

NavButton.propTypes = {
  navButtonName: PropTypes.string.isRequired,
  activeClass: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NavButton;
