const AbortSignal = require("./AbortSignal");

/**
 * A class to properly abort outlying http requests.
 * @see https://dom.spec.whatwg.org/#abortcontroller
 */
class AbortController {
    constructor() {
        /**
         * The signal to the abort controller.
         * @type {AbortSignal}
         */
        this.signal = new AbortSignal();
    }
    
    /**
     * The abort function, to dispatch the abort event to the signal.
     * @returns {void}
     */
    abort() {
        if (this.signal.aborted) return;
        return this.signal.dispatchEvent({
            "type": "abort",
            "bubbles": false,
            "cancellable": false
        });
    }

    toString() {
      return '[object AbortController]';
    }
}

module.exports = AbortController;