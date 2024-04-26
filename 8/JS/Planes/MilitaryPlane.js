const Plane = require("./Plane");

/**
 * MilitaryPlane class extends the Plane class and represents a military plane.
 * It has additional militaryType property.
 *
 * @class
 * @extends Plane
 */
class MilitaryPlane extends Plane {
    /**
     * Constructor for MilitaryPlane class.
     *
     * @constructor
     * @param {string} model - The model of the plane.
     * @param {number} maxSpeed - The maximum speed of the plane.
     * @param {number} maxFlightDistance - The maximum flight distance of the plane.
     * @param {number} maxLoadCapacity - The maximum load capacity of the plane.
     * @param {string} militaryType - The military type of the plane.
     */
    constructor(
        model,
        maxSpeed,
        maxFlightDistance,
        maxLoadCapacity,
        militaryType
    ) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);

        /**
         * The military type of the plane.
         * @type {string}
         */
        this.militaryType = militaryType;
    }

    /**
     * Get the military type of the plane.
     *
     * @return {string} The military type of the plane.
     */
    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = MilitaryPlane;

