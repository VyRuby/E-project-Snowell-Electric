export const getProductImages = (product) => {
  const formatImageUrl = (image) => {
    if (typeof image === 'string') {
      if (image.startsWith('http://') || image.startsWith('https://')) {
        return image;
      }
      return `${process.env.PUBLIC_URL}/${image}`;
    }
    return `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
  };

  if (typeof product.images === 'string') {
    return [formatImageUrl(product.images)];
  }
  if (Array.isArray(product.images) && product.images.length > 0) {
    return product.images.map(img => formatImageUrl(img));
  }
  return [`${process.env.PUBLIC_URL}/images/placeholder.jpg`];
};

export const getDisplayImage = (product) => {
  return getProductImages(product)[0];
};