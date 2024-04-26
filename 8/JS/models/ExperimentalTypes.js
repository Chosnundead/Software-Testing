/**
 * Module that defines the types of experimental planes.
 *
 * @module ExperimentalTypes
 */

/**
 * Object that represents the different types of experimental planes.
 *
 * @typedef {Object} ExperimentalTypes
 * @property {string} LIFTING_BODY - Represents a lifting body plane.
 * @property {string} HYPERSONIC - Represents a hypersonic plane.
 * @property {string} HIGH_ALTITUDE - Represents a high altitude plane.
 * @property {string} VTOL - Represents a vertical take-off and landing plane.
 */

/**
 * Contains the different types of experimental planes.
 *
 * @constant
 * @type {ExperimentalTypes}
 */
const ExperimentalTypes = {
    /**
     * Represents a lifting body plane.
     *
     * @type {string}
     */
    LIFTING_BODY: "lifting_body",

    /**
     * Represents a hypersonic plane.
     *
     * @type {string}
     */
    HYPERSONIC: "HYPERSONIC",

    /**
     * Represents a high altitude plane.
     *
     * @type {string}
     */
    HIGH_ALTITUDE: "HIGH_ALTITUDE",

    /**
     * Represents a vertical take-off and landing plane.
     *
     * @type {string}
     */
    VTOL: "VTOL",
};

module.exports = ExperimentalTypes;
