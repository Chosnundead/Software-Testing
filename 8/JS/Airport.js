const PassengerPlane = require("./Planes/PassengerPlane");
const MilitaryPlane = require("./Planes/MilitaryPlane");
const MilitaryType = require("./models/MilitaryType");
const experimentalPlane = require("./Planes/ExperimentalPlane");

/**
 * Airport class represents an airport, which can have planes.
 * Since it's a data structure, there are no public methods, only getters to provide read access.
 */
class Airport {
    /**
     * Returns list of passenger planes
     * @return {PassengerPlane[]} - List of passenger planes
     */
    getPasPl() {
        return this.planes.filter((plane) => plane instanceof PassengerPlane);
    }

    /**
     * Returns list of military planes
     * @return {MilitaryPlane[]} - List of military planes
     */
    getMilitaryPlanes() {
        return this.planes.filter((plane) => plane instanceof MilitaryPlane);
    }

    /**
     * Returns plane with maximum capacity of passengers
     * @return {PassengerPlane} - Plane with maximum capacity of passengers
     */
    getPassengerPlaneWithMaxPassengersCapacity() {
        return [...this.getPasPl()].sort(
            (a, b) => a.getPassengersCapacity() - b.getPassengersCapacity()
        )[this.getPasPl().length - 1];
    }

    /**
     * Returns list of transport military planes
     * @return {MilitaryPlane[]} - List of transport military planes
     */
    getTransportMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(
            (plane) => plane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT
        );
    }

    /**
     * Returns list of bomber military planes
     * @return {MilitaryPlane[]} - List of bomber military planes
     */
    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(
            (plane) => plane.getMilitaryType() === MilitaryType.BOMBER
        );
    }

    /**
     * Returns list of experimental planes
     * @return {experimentalPlane[]} - List of experimental planes
     */
    getExperimentalPlanes() {
        return this.planes.filter(
            (plane) => plane instanceof experimentalPlane
        );
    }

    /**
     * Sorts planes by max distance
     * @return {Airport} - Sorted Airport
     */
    sortByMaxDistance() {
        this.planes.sort((a, b) =>
            a.Get_Max_Flight_Distance() > b.Get_Max_Flight_Distance() ? 1 : -1
        );
        return this;
    }

    /**
     * Sorts planes by max speed
     * @return {Airport} - Sorted Airport
     */
    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMS() > b.getMS() ? 1 : -1));
        return this;
    }

    /**
     * Sorts planes by max load capacity
     * @return {Airport} - Sorted Airport
     */
    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) =>
            a.getMinLoadCapacity() > b.getMinLoadCapacity() ? 1 : -1
        );
        return this;
    }

    /**
     * Returns list of all planes
     * @return {Plane[]} - List of all planes
     */
    getPlanes() {
        return this.planes;
    }

    /**
     * Returns string representation of the Airport
     * @return {string} - String representation of the Airport
     */
    static print(planes) {
        return JSON.stringify(planes);
    }

    /**
     * Airport class constructor
     * @param {Plane[]} planes - List of planes
     */
    constructor(planes) {
        this.planes = planes;
    }
}

module.exports = Airport;
