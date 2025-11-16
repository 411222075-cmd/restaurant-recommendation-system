// utils/normalizer.js

/**
 * Normalisasi Jarak (0–1). Semakin dekat, skor semakin tinggi.
 * @param {number} distance - Jarak dalam km.
 * @param {number} maxDistance - Jarak maksimum relevan.
 */
const normalizeDistanceScore = (distance, maxDistance = 10) => {
    return 1 - (Math.min(distance, maxDistance) / maxDistance);
};

/**
 * Normalisasi Rating (0–1).
 * @param {number} rating - Rating aktual.
 * @param {number} maxRating - Rating maksimum.
 */
const normalizeRatingScore = (rating, maxRating = 5) => {
    return rating / maxRating;
};

module.exports = {
    normalizeDistanceScore,
    normalizeRatingScore
};
