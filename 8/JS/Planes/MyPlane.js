const Plane = require("./Plane");

/**
 * MyPlane class extends the Plane class and represents a specific type of plane.
 * @class
 * @extends Plane
 */
class MyPlane extends Plane {
    /**
     * Constructor for MyPlane class.
     * @constructor
     * @param {string} model - The model of the plane.
     * @param {number} maxSpeed - The maximum speed of the plane.
     * @param {number} maxFlightDistance - The maximum flight distance of the plane.
     * @param {number} maxLoadCapacity - The maximum load capacity of the plane.
     */
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
    }
}
