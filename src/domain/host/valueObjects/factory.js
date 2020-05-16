import {HostNameValueObject} from './hostNameValueObject'

class HostValueObjectsFactory {
  static hostNameValueObject = ({hostName}) =>
    new HostNameValueObject({hostName})
}

export {HostValueObjectsFactory}
