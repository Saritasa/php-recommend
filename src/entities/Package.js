import Resource from './Resource';

/**
 * Website resource
 */
export default class Website extends Resource {
  /** @inheritDoc */
  constructor(name, data) {
    super(name, data);

    this.language = '';
  }
}
