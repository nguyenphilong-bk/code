// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Constraints:

// The given address is a valid IPv4 address.

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    return address.split('.').join('[.]');
};

console.log(defangIPaddr('1.1.1.1'));
