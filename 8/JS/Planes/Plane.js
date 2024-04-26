/**
 * Plane class represents a plane object.
 * It contains information such as model, maximum speed, maximum flight distance and maximum load capacity.
 */
class Plane {
    /**
     * Constructor for Plane class.
     * 
     * @param {string} model - The model of the plane.
     * @param {number} maxSpeed - The maximum speed of the plane.
     * @param {number} maxFlightDistance - The maximum flight distance of the plane.
     * @param {number} maxLoadCapacity - The maximum load capacity of the plane.
     */
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    /**
     * Get the model of the plane.
     * 
     * @returns {string} The model of the plane.
     */
    getModel() {
        return this.model;
    }

    /**
     * Get the maximum speed of the plane.
     * 
     * @returns {number} The maximum speed of the plane.
     */
    getMS() {
        return this.maxSpeed;
    }

    /**
     * Get the maximum flight distance of the plane.
     * 
     * @returns {number} The maximum flight distance of the plane.
     */
    Get_Max_Flight_Distance() {
        return this.maxFlightDistance;
    }

    /**
     * Get the minimum load capacity of the plane.
     * 
     * @returns {number} The minimum load capacity of the plane.
     */
    getMinLoadCapacity() {
        // Return the minimum load capacity of the plane.
        return this.maxLoadCapacity;
    }
}

module.exports = Plane;

