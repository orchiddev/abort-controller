/**
 * The handler for event listeners
 */
class EventTarget {
    constructor() {
        this.listeners = {};
    }

    /**
     * Adds a new listener for a specific event
     * @param {string} type The type of event.
     * @param {Function} cb The callback to the listener.
     * @returns {Number}
     */
    addEventListener(type, cb) {
        if (!this.listeners[type])
            this.listeners[type] = [];

        return this.listeners[type].push(cb);
    }

    /**
     * Removes a specific listener from an event
     * @param {string} type The type of event.
     * @param {Function} cb The callback to the listener.
     * @returns {void}
     */
    removeEventListener(type, cb) {
        if (!this.listeners[type]) {
            return;
        }

        let events = this.listeners[type];
        events.splice(events.findIndex((call) => call === cb), 1);
        return;
    }

    /**
     * Dispatches an event.
     * @param {Object} event 
     * @returns {boolean}
     */
    dispatchEvent(event) {
        if (!this.listeners[event.type])
            return true;

        let events = this.listeners[event.type].slice()

        for (let i = 0; i < events.length; i++)
            events[i].call(this, event);

        return true;
    }
}

module.exports = EventTarget;