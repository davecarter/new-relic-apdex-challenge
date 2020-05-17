import {AppNameValueObject} from './appNameValueObject'
import {AppsByHostNameListValueObject} from './appsByHostNameListValueObject'

class HostValueObjectsFactory {
  static appNameValueObject = ({name, apdex, contributors, version}) =>
    new AppNameValueObject({name, apdex, contributors, version})

  static appsByHostNameListValueObject = ({appsByHostNameList}) =>
    new AppsByHostNameListValueObject({appsByHostNameList})
}

export {HostValueObjectsFactory}
