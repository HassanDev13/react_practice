 import PropTypes from 'prop-types';

 const header = ({title, level}) => {
  return (
    <header>Yeep i am header {title}
    <h1 style={colorr}>{level}</h1>
    </header>
  );
}

header.propTypes = {
  title : PropTypes.string
}
 
const colorr = {color:'red'}
export default header ; 