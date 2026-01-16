import { useEffect, useState } from 'react';
import { preloadImages } from '../utils/imageOptimization';

/**
 * Hook to preload images and track loading state
 * @param {string[]} imageSources - Array of image URLs to preload
 * @returns {boolean} - Loading state
 */
export const useImagePreload = (imageSources) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!imageSources || imageSources.length === 0) {
            setIsLoading(false);
            return;
        }

        preloadImages(imageSources)
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false)); // Still set to false on error
    }, [imageSources]);

    return isLoading;
};
