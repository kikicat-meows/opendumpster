export const formatReviewCount = reviewCount => {
  let reviewString;
  if (reviewCount <= 1) {
    reviewString = `${reviewCount} review`;
  }
  if (reviewCount > 1) {
    reviewString = `${reviewCount} reviews`;
  }

  return reviewString;
};
