const Plane = require("./Plane");

/**
 * Class representing an experimental plane
 * @extends Plane
 */
class ExperimentalPlane extends Plane {
    /**
     * Constructor for experimentalPlane class
     * @param {String} model - The model of the plane
     * @param {Number} maxSpeed - The maximum speed the plane can achieve
     * @param {Number} maxFlightDistance - The maximum distance the plane can fly in a single flight
     * @param {Number} maxLoadCapacity - The maximum load capacity of the plane
     * @param {String} type - The type of the experimental plane
     * @param {String} classificationLevel - The classification level of the experimental plane
     */
    constructor(
        model,
        maxSpeed,
        maxFlightDistance,
        maxLoadCapacity,
        type,
        classificationLevel
    ) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._model = model;
        this._maxSpeed = maxSpeed;
        this._maxFlightDistance = maxFlightDistance;
        this._maxLoadCapacity = maxLoadCapacity;
        this._type = type;
        this._classificationLevel = classificationLevel;
    }

    /**
     * Getter for the model of the plane
     * @return {String} The model of the plane
     */
    get model() {
        return this._model;
    }

    /**
     * Setter for the model of the plane
     * @param {String} value - The new model of the plane
     */
    set model(value) {
        this._model = value;
    }

    /**
     * Getter for the maximum speed of the plane
     * @return {Number} The maximum speed of the plane
     */
    get maxSpeed() {
        return this._maxSpeed;
    }

    /**
     * Setter for the maximum speed of the plane
     * @param {Number} value - The new maximum speed of the plane
     */
    set maxSpeed(value) {
        this._maxSpeed = value;
    }

    /**
     * Getter for the maximum flight distance of the plane
     * @return {Number} The maximum flight distance of the plane
     */
    get maxFlightDistance() {
        return this._maxFlightDistance;
    }

    /**
     * Setter for the maximum flight distance of the plane
     * @param {Number} value - The new maximum flight distance of the plane
     */
    set maxFlightDistance(value) {
        this._maxFlightDistance = value;
    }

    /**
     * Getter for the maximum load capacity of the plane
     * @return {Number} The maximum load capacity of the plane
     */
    get maxLoadCapacity() {
        return this._maxLoadCapacity;
    }

    /**
     * Setter for the maximum load capacity of the plane
     * @param {Number} value - The new maximum load capacity of the plane
     */
    set maxLoadCapacity(value) {
        this._maxLoadCapacity = value;
    }

    /**
     * Getter for the type of the experimental plane
     * @return {String} The type of the experimental plane
     */
    get type() {
        return this._type;
    }

    /**
     * Setter for the type of the experimental plane
     * @param {String} value - The new type of the experimental plane
     */
    set type(value) {
        this._type = value;
    }

    /**
     * Getter for the classification level of the experimental plane
     * @return {String} The classification level of the experimental plane
     */
    get classificationLevel() {
        return this._classificationLevel;
    }

    /**
     * Setter for the classification level of the experimental plane
     * @param {String} value - The new classification level of the experimental plane
     */
    set classificationLevel(value) {
        this._classificationLevel = value;
    }
}

module.exports = ExperimentalPlane;
