function Button({ variant, className, children, type, block, disabled }) {
  return (
    <button
      type={type || 'button'}
      disabled={disabled}
      className={`btn ${
        variant === 'Contained' ? 'btn-primary' : 'btn-outline'
      } ${block ? 'btn-sm-block' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
