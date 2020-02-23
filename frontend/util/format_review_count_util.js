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

export const formatReviewCountCap = reviewCount => {
  let reviewString;
  if (reviewCount <= 1) {
    reviewString = `${reviewCount} Review`;
  }
  if (reviewCount > 1) {
    reviewString = `${reviewCount} Reviews`;
  }

  return reviewString;
};