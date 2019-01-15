import Yaml from 'yamljs';
import _ from 'lodash';
import TechnologyStack from '../entities/TechnologyStack';
import Resource from '../entities/Resource';

/**
 * Service to parse and convert yaml into appropriate collection.
 */
export default class YamlDataConverter {
  /**
   * Parse and convert yaml into appropriate collection.
   *
   * @param {string} filePath - Path to yaml file
   *
   * @return {Array<TechnologyStack>}
   */
  parse(filePath) {
    const data = this.prepareData(Yaml.load(filePath));

    return this.convertData(data);
  }

  /**
   * Add url to websites if it absent.
   *
   * @param {Object} data - Data to prepare
   *
   * @return {Object}
   */
  static prepareData(data) {
    const localData = data;

    _.forEach(localData, (val, k) => {
      _.forEach(val.websites, (item, key) => {
        let url = item.url || key;

        if (!_.startsWith(url, 'http')) {
          url = `http://${url}`;
        }
        localData[k].websites[key].url = url;
      });
    });

    return localData;
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

      _.forEach(resourcesGroups, (resourceGroup, type) => {
        _.forEach(resourceGroup, (resource, name) => {
          const item = new Resource(name);

          item.setDesc(resource.description);
          item.setUrl(resource.url);
          if (resource.language) {
            item.setLanguage(resource.language);
          }

          if (resource.explain) {
            item.setExplanation(resource.explain);
          }

          if (resource.tags) {
            resource.tags.forEach(tagWord => item.addTag(tagWord));
          }

          technologyStack.addResource(type, item);
        });
      });
      technologyStacks.push(technologyStack);
    });

    return technologyStacks;
  }
}
