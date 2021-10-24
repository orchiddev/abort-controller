const EventTarget = require("./EventTarget");

/**
 * The signal to properly abort connections.
 * @see https://dom.spec.whatwg.org/#abortsignal
 * @extends {EventTarget}
 */
class AbortSignal extends EventTarget {
    constructor() {
        super();

        /**
         * Whether or not the signal is aborted, or not.
         * @type {boolean}
         */
        this.aborted = false;

    }

    /**
     * Dispatches the abort event.
     * @param {Object} event 
     * @returns {boolean}
     */
    dispatchEvent(event) {
        if (this.aborted) return; // cant abort again
        if (event.type === "abort")
            this.aborted = true;

        return super.dispatchEvent(event);
    }

    /**
     * Stringifies the signal
     * @returns {string}
     */
    toString() {
        return '[object AbortSignal]';
    }
}

module.exports = AbortSignal;