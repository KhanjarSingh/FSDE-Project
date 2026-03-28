const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const styles = {
    padding: '0.5rem 1rem',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: variant === 'primary' ? '#333' : '#777',
    color: '#fff',
    borderRadius: '4px',
    fontSize: '1rem',
    marginTop: '0.5rem'
  };
  return ( <button type={type} style={styles} onClick={onClick}>{children}</button> );
};
export default Button;
