Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toMomentObject;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toMomentObject(dateString, customFormat) {
  if (customFormat) {
    var customFormatDate = (0, _moment2['default'])(dateString, customFormat, true);
    if (customFormatDate.isValid()) return customFormatDate;
  }

  var date = (0, _moment2['default'])(dateString, _constants.DISPLAY_FORMAT, true);
  if (date.isValid()) return date;

  var isoDate = (0, _moment2['default'])(dateString, _constants.ISO_FORMAT, true);
  if (isoDate.isValid()) return isoDate;

  return null;
}