import Resource from './Resource';

/**
 * Website resource
 */
export default class Website extends Resource {
  /** @inheritDoc */
  constructor(name, data) {
    super(name, data);

    let url = this.url || name;

    if (url && !url.startsWith('http')) {
      url = `http://${url}`;
    }

    this.url = url;
  }
}
