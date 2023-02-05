function Button({ variant, className, children, type, block }) {
  return (
    <button
      type={type || 'button'}
      className={`btn ${
        variant === 'Contained' ? 'btn-primary' : 'btn-outline'
      } ${block ? 'btn-sm-block' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
