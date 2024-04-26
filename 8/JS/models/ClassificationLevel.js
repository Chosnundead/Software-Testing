/**
 * Enum representing the different classification levels of a plane.
 * The classification level determines the sensitivity of the data
 * carried by the plane.
 */
const ClassificationLevel = {
    /**
     * Unclassified planes carry general data and are not considered
     * to be sensitive.
     */
    UNCLASSIFIED: "Unclassified",

    /**
     * Confidential planes carry data that requires protection, but
     * not necessarily top-secret status.
     */
    CONFIDENTIAL: "Confidential",

    /**
     * Secret planes carry sensitive and classified information.
     */
    SECRET: "Secret",

    /**
     * Top-secret planes carry the most sensitive and highly classified
     * information.
     */
    TOP_SECRET: "Top_secret",
};

module.exports = ClassificationLevel;
