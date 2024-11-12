import { useContext } from 'react';

import { ImageViewContext } from '@context/imageViewContext';

export const useImageViewContext = () => {
    return useContext(ImageViewContext);
};
