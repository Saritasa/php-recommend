import Yaml from 'yamljs';
import _ from 'lodash';
import TechnologyStack from '../entities/TechnologyStack';
import Resource from '../entities/Resource';
import ResourceTypes from '../enums/resourceTypes';
import Website from '../entities/Website';

/**
 * Service to parse and convert yaml into appropriate collection.
 */
export default class YamlDataConverter {
  /**
   * Parse and convert yaml into appropriate collection.
   *
   * @param {string} dataString - Content of list.yaml file
   *
   * @return {Array<TechnologyStack>}
   */
  static parse(dataString) {
    const data = Yaml.parse(dataString);
    return YamlDataConverter.convertData(data);
  }

  /**
   * Convert yaml parsed object into technology stacks collection.
   *
   * @param {Object} data - Data to convert
   *
   * @return {Array<TechnologyStack>}
   */
  static convertData(data) {
    const technologyStacks = [];

    _.forEach(data, (resourcesGroups, technologyStackName) => {
      const technologyStack = new TechnologyStack(technologyStackName);

      _.forEach(resourcesGroups, (resourceGroup, resourceType) => {
        _.forEach(resourceGroup, (resource, name) => {
          let item = null;

          switch (resourceType) {
            case ResourceTypes.WEBSITE:
              item = new Website(name, resource);
              break;
            case ResourceTypes.PACKAGE:
              item = new Resource(name, resource);
              break;
            case ResourceTypes.TUTORIAL:
              item = new Resource(name, resource);
              break;
            default:
              throw new Error(`Unknown resource type ${resourceType}`);
          }

          technologyStack.addResource(resourceType, item);
        });
      });
      technologyStacks.push(technologyStack);
    });

    return technologyStacks;
  }
}
