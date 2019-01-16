import Yaml from 'yamljs';
import _ from 'lodash';
import TechnologyStack from '../entities/TechnologyStack';
import ResourceTypes from '../enums/resourceTypes';
import Resource from '../entities/Resource';
import Package from '../entities/Package';
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
    return _.map(data, YamlDataConverter.parseTechnologyStack);
  }

  /**
   * Convert yaml parsed object into technology stacks collection.
   *
   * @param {Object} resourceGroups - Data to convert
   * @param {string} stackName - Technology stack name
   *
   * @return TechnologyStack
   */
  static parseTechnologyStack(resourceGroups, stackName) {
    const technologyStack = new TechnologyStack(stackName);
    _.forEach(resourceGroups, (resourceGroup, resourceType) => {
      _.chain(resourceGroup)
        .map((data, name) => YamlDataConverter.parseResource(data, name, resourceType))
        .forEach(resource => technologyStack.addResource(resourceType, resource))
        .value();
    });
    return technologyStack;
  }

  /**
   * Convert yaml parsed object into resource object of appropriate class.
   *
   * @param {Object} data - Data to convert
   * @param {string} resourceName - Name of website, article, package, etc.
   * @param {string} resourceType - one of known resource types: Package, WebSite, Tutorial
   *
   * @return Resource
   */
  static parseResource(data, resourceName, resourceType) {
    switch (resourceType) {
      case ResourceTypes.WEBSITE:
        return new Website(resourceName, data);
      case ResourceTypes.PACKAGE:
        return new Package(resourceName, data);
      case ResourceTypes.TUTORIAL:
        return new Resource(resourceName, data);
      default:
        throw new Error(`Unknown resource type ${resourceType}`);
    }
  }
}
