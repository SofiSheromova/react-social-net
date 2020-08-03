const {validationResult, query} = require('express-validator');
const {Types} = require('mongoose');

module.exports.defaultParams = {
  count: 50,
  getCount(count) {
    return count === undefined ? this.count : count;
  },
  offset: 0,
  getOffset(offset) {
    return offset === undefined ? this.offset : offset;
  },
};

module.exports.validationChains = {
  access_token() {
    return query('access_token')
        .exists({checkNull: true, checkFalsy: true});
  },
  id(fieldName='id') {
    return query(fieldName)
        .exists({checkNull: true, checkFalsy: true})
        .isLength({min: 24, max: 24})
        .bail()
        .customSanitizer((value) => new Types.ObjectId(value));
  },
  ids() {
    return query('ids')
        .exists({checkNull: true, checkFalsy: true})
        .customSanitizer((value) => value.split(','));
  },
  count(min=0, max=50) {
    return query('count')
        .optional()
        .isInt({min, max}).toInt();
  },
  offset(min = 0, max = undefined) {
    const options = max ? {min, max} : {min};
    return query('offset')
        .optional()
        .isInt(options).toInt();
  },
  text() {
    return query('text')
        .optional()
        .isString().isLength({max: 2000});
  },
  title() {
    return query('title')
        .exists()
        .isString().isLength({max: 100});
  },
  attachments() {
    return query('attachments')
        .optional()
        .customSanitizer((value) => value.split(','));
  },
};

const checkErrors = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errors.array();
  }
};
module.exports.checkErrors = checkErrors;

const sendError = (res, errors) => {
  return res.status(422).json({errors});
};
module.exports.sendError = sendError;

module.exports.errorChecker = (controller) => {
  return (req, res) => {
    const errors = checkErrors(req);
    if (errors) {
      return sendError(res, errors);
    }
    return controller(req, res);
  };
};
