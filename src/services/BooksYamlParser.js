import Yaml from 'yamljs';
import _ from 'lodash';
import Book from '../entities/Book';
import Resource from '../entities/Resource';

/**
 * Service to parse and convert yaml into appropriate books collection.
 */
export default class BooksYamlParser {
  /**
   * Parse and convert yaml into appropriate books collection.
   *
   * @param {string} filePath - Path to yaml file
   *
   * @return {Array<Book>}
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
  prepareData(data) {
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
   * Convert yaml parsed object into books collection.
   *
   * @param {Object} data - Data to convert
   *
   * @return {Array<Book>}
   */
  convertData(data) {
    const books = [];

    _.forEach(data, (resourcesGroups, bookName) => {
      const book = new Book(bookName);

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

          book.addResource(type, item);
        });
      });
      books.push(book);
    });

    return books;
  }
}
