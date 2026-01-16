import { useState, useEffect } from 'react';
import { getOptimizedUnsplashUrl, createBlurPlaceholder } from '../utils/imageOptimization';
import './OptimizedImage.css';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    width,
    quality = 80,
    eager = false,
    onLoad,
    ...props
}) => {
    const [imageSrc, setImageSrc] = useState(createBlurPlaceholder());
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        // Optimize the image URL if it's from Unsplash
        const optimizedSrc = getOptimizedUnsplashUrl(src, { width, quality });

        const img = new Image();

        img.onload = () => {
            setImageSrc(optimizedSrc);
            setImageLoaded(true);
            onLoad?.();
        };

        img.onerror = () => {
            // Fallback to original src if optimization fails
            setImageSrc(src);
            setImageLoaded(true);
        };

        // Start loading
        img.src = optimizedSrc;

    }, [src, width, quality, onLoad]);

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={`optimized-image ${imageLoaded ? 'loaded' : 'loading'} ${className}`}
            loading={eager ? 'eager' : 'lazy'}
            {...props}
        />
    );
};

export default OptimizedImage;
