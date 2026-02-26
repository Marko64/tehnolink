interface LogoProps {
  variant?: 'filters' | 'navbar';
}

export function Logo({ variant = 'filters' }: LogoProps) {
  const logoSrc = variant === 'filters' ? '/logo-black.png' : '/tehnolink-logo.png';
  
  return (
    <img 
      src={logoSrc} 
      alt="Tehnolink Logo" 
      width="164" 
      height="40"
    />
  );
}
