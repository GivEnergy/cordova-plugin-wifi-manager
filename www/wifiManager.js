'use strict';

const PLUGIN_NAME = 'WiFiManager';
const argscheck = require('cordova/argscheck');
const exec = require('cordova/exec');

/**
 * Connects to Wi-Fi access point.
 * @param ssid {String} SSID of Wi-Fi access point.
 * @param passphrase {String} Passphrase of Wi-Fi access point.
 * @param bssid {String} Optional BSSID of the Wi-Fi access point.
 * @param onSuccess {Function} Callback invoked when the connect method was successfully called.
 * @param onFailure {Function} Callback invoked when the connect method failed to be called.
 */
function connect(ssid, passphrase, bssid, onSuccess, onFailure) {
  argscheck.checkArgs('sssFF', PLUGIN_NAME + '.connect', arguments);
  exec(onSuccess, onFailure, PLUGIN_NAME, 'connect', [ssid, passphrase, bssid]);
}

/**
 * Disconnects from Wi-Fi access point.
 * @param ssid {String} SSID of Wi-Fi access point.
 * @param onSuccess {Function} Callback invoked when the disconnect method was successfully called.
 * @param onFailure {Function} Callback invoked when the disconnect method failed to be called.
 */
function disconnect(ssid, onSuccess, onFailure) {
  argscheck.checkArgs('sFF', PLUGIN_NAME + '.disconnect', arguments);
  exec(onSuccess, onFailure, PLUGIN_NAME, 'disconnect', [ssid]);
}

module.exports = {
  connect: connect,
  disconnect: disconnect,
};
