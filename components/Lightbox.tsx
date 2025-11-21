
import React from 'react';

interface LightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(startIndex);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };
  
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white text-4xl" onClick={onClose}>&times;</button>
      
      <div className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
            <button className="absolute left-0 sm:-left-12 text-white text-4xl p-2 bg-black/30 rounded-full" onClick={goToPrevious}>&#10094;</button>
        )}
        
        <img src={images[currentIndex]} alt={`Project view ${currentIndex + 1}`} className="max-w-full max-h-full object-contain" />
        
        {images.length > 1 && (
            <button className="absolute right-0 sm:-right-12 text-white text-4xl p-2 bg-black/30 rounded-full" onClick={goToNext}>&#10095;</button>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
