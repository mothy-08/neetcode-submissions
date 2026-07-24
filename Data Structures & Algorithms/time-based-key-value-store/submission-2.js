class TimeMap {
    constructor() {
        this.keys = {}; // key: [(value, timestamp)]
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keys[key]) {
            this.keys[key] = [];
        }
        this.keys[key].push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keys[key] ?? [];
        let value = "";
        let left_pointer = 0;
        let right_pointer = values.length - 1;

        while (left_pointer <= right_pointer) {
            const middle_pointer = left_pointer + Math.floor((right_pointer - left_pointer) / 2);
            const previous_timestamp = values[middle_pointer][1];

            if (previous_timestamp <= timestamp) {
                value = values[middle_pointer][0];
                left_pointer = middle_pointer + 1;
            } else {
                right_pointer = middle_pointer - 1;
            }
        }

        return value;
    }
}
