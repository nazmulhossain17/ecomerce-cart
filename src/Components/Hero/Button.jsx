import { motion } from 'framer-motion'

 const Button = ({
    children,
    className = '',
    variant = 'default',
    size = 'default',
    ...props
  }) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    };
  
    const sizes = {
      default: 'h-10 py-2 px-4 rounded-md',
      sm: 'h-9 px-3 rounded-md',
      lg: 'h-11 px-8 rounded-md',
      icon: 'h-10 w-10 rounded-full',
    };
  
    return (
      <motion.button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  };


  export default Button;