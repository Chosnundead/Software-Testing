/**
 * The MilitaryType module exports an object that represents the different types of military planes.
 *
 * @module MilitaryType
 */

/**
 * Represents the type of a military plane.
 *
 * @typedef {Object} MilitaryType
 * @property {string} TYPE_FIGHTER - Represents a fighter plane.
 * @property {string} TYPE_BOMBER - Represents a bomber plane.
 * @property {string} TYPE_TRANSPORT - Represents a transport plane.
 */

/**
 * Contains the different types of military planes.
 *
 * @constant
 * @type {MilitaryType}
 */
const MilitaryType = {
    /**
     * Represents a fighter plane.
     *
     * @type {string}
     */
    TYPE_FIGHTER: "Fighter",

    /**
     * Represents a bomber plane.
     *
     * @type {string}
     */
    TYPE_BOMBER: "Bomber",

    /**
     * Represents a transport plane.
     *
     * @type {string}
     */
    TYPE_TRANSPORT: "Transport",
};

module.exports = MilitaryType;
