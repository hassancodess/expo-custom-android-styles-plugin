"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAndroidStylesPlugin = void 0;
var config_plugins_1 = require("@expo/config-plugins");
/**
 * Merges the provided custom styles with the existing Android styles in the Expo project.
 *
 * @param config - The Expo configuration object.
 * @param customStyles - An array of ResourceGroupXML objects representing the custom styles to be merged.
 * @returns The updated Expo configuration object with the merged styles.
 */
var withAndroidStylesPlugin = function (config, customStyles) {
    return withCustomAndroidStyles(config, customStyles);
};
exports.withAndroidStylesPlugin = withAndroidStylesPlugin;
/**
 * Internal function to merge custom styles with existing Android styles.
 *
 * @param config - The Expo configuration object.
 * @param customStyles - An array of ResourceGroupXML objects representing the custom styles to be merged.
 * @returns The updated Expo configuration object with the merged styles.
 */
var withCustomAndroidStyles = function (config, customStyles) {
    return (0, config_plugins_1.withAndroidStyles)(config, function (config) {
        var styles = config.modResults;
        customStyles.forEach(function (customStyle) {
            var _a;
            var existingStyle = styles.resources.style.find(function (style) { return style.$.name === customStyle.$.name; });
            if (existingStyle) {
                (_a = existingStyle.item).push.apply(_a, customStyle.item);
            }
            else {
                styles.resources.style.push(customStyle);
            }
        });
        return config;
    });
};
