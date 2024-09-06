import { withAndroidStyles } from '@expo/config-plugins'
import { ResourceGroupXML } from '@expo/config-plugins/build/android/Resources'

/**
 * Merges the provided custom styles with the existing Android styles in the Expo project.
 *
 * @param config - The Expo configuration object.
 * @param customStyles - An array of ResourceGroupXML objects representing the custom styles to be merged.
 * @returns The updated Expo configuration object with the merged styles.
 */
export const withAndroidStylesPlugin = (
  config: any,
  customStyles: ResourceGroupXML[]
) => {
  return withCustomAndroidStyles(config, customStyles)
}

/**
 * Internal function to merge custom styles with existing Android styles.
 *
 * @param config - The Expo configuration object.
 * @param customStyles - An array of ResourceGroupXML objects representing the custom styles to be merged.
 * @returns The updated Expo configuration object with the merged styles.
 */
const withCustomAndroidStyles = (
  config: any,
  customStyles: ResourceGroupXML[]
) => {
  return withAndroidStyles(config, (config: any) => {
    const styles = config.modResults

    customStyles.forEach((customStyle) => {
      const existingStyle = styles.resources.style.find(
        (style: ResourceGroupXML) => style.$.name === customStyle.$.name
      )
      if (existingStyle) {
        existingStyle.item.push(...customStyle.item)
      } else {
        styles.resources.style.push(customStyle)
      }
    })
    return config
  })
}
