import PropTypes from 'prop-types';

function HelpBox({ title, text }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

HelpBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HelpBox; 