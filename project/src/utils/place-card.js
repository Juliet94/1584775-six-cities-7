const RATING_MULTIPLIER = 20;

export const getPlaceRatingPercent = (rating) => `${rating.toFixed() * RATING_MULTIPLIER}%`;

