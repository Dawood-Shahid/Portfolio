interface BackgroundWithBlurProps {
  imagePath: string;
  blurIntensity?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  overlayColor?: string;
  overlayOpacity?: number;
  children: React.ReactNode;
  className?: string;
}

export default function BackgroundWithBlur({
  imagePath,
  blurIntensity = 'sm',
  overlayColor = 'bg-background',
  overlayOpacity,
  // overlayOpacity = 80,
  children,
  className = '',
}: BackgroundWithBlurProps) {
  const blurClass = blurIntensity === 'none' ? '' : `backdrop-blur-${blurIntensity}`;
  const overlayClass = `${overlayColor}/${overlayOpacity}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Blur Overlay */}
      <div className={`absolute inset-0 z-0 ${overlayClass} ${blurClass}`} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
