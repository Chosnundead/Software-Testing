const Plane = require("./Plane");

/**
 * PassengerPlane class extends the Plane class and represents a passenger plane.
 * It has an additional attribute, passengers capacity, which represents the maximum number of passengers the plane can carry.
 */
class PassengerPlane extends Plane {
    /**
     * Constructor for PassengerPlane class.
     * @param {String} model - The model of the plane.
     * @param {Number} maxSpeed - The maximum speed the plane can achieve.
     * @param {Number} maxFlightDistance - The maximum distance the plane can fly in a single flight.
     * @param {Number} maxLoadCapacity - The maximum load capacity of the plane.
     * @param {Number} passengersCapacity - The maximum number of passengers the plane can carry.
     */
    constructor(
        model,
        maxSpeed,
        maxFlightDistance,
        maxLoadCapacity,
        passengersCapacity
    ) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._passengersCapacity = passengersCapacity;
    }

    /**
     * Getter for the passengers capacity attribute.
     * @return {Number} The maximum number of passengers the plane can carry.
     */
    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = PassengerPlane;
