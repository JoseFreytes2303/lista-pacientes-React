import PropTypes from 'prop-types';

export const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      <p>{children}</p>
    </div>
  );
};
Error.propTypes = {
  children: PropTypes.node.isRequired,
};
