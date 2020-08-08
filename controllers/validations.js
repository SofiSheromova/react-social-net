const {validationResult, query} = require('express-validator');
const {Types} = require('mongoose');
const createError = require('http-errors');

const defaultParams = {
  count: 50,
  getCount(count) {
    return count === undefined ? this.count : count;
  },
  offset: 0,
  getOffset(offset) {
    return offset === undefined ? this.offset : offset;
  },
};

const validationChains = {
  access_token() {
    return query('access_token')
        .exists({checkNull: true, checkFalsy: true});
  },
  id(fieldName='id') {
    return query(fieldName)
        .exists({checkNull: true, checkFalsy: true})
        .bail()
        .custom((id) => Types.ObjectId.isValid(id))
        .withMessage('Invalid ID: Argument passed in must be a single ' +
            'String of 12 bytes or a string of 24 hex characters.')
        .bail()
        .customSanitizer((id) => new Types.ObjectId(id));
  },
  ids() {
    return query('ids')
        .exists({checkNull: true, checkFalsy: true})
        .bail()
        .customSanitizer((value) => value.split(','))
        .custom((ids) => ids.length <= defaultParams.getCount())
        .withMessage('Too many ids. ' +
          `No more than ${defaultParams.getCount()} elements.`)
        .bail()
        .custom((ids) => {
          return ids.reduce((acc, id) =>
            acc && Types.ObjectId.isValid(id), true);
        })
        .withMessage('Invalid ID: Argument passed in must be a single ' +
          'String of 12 bytes or a string of 24 hex characters.')
        .bail()
        .customSanitizer((ids) => {
          return ids.map((id) => new Types.ObjectId(id));
        });
  },
  firstName() {
    return query('first_name')
        .exists()
        .isString().isLength({max: 100});
  },
  lastName() {
    return query('last_name')
        .exists()
        .isString().isLength({max: 100});
  },
  email() {
    return query('email')
        .exists()
        .isEmail();
  },
  password() {
    return query('password')
        .exists()
        .isString().isLength({max: 100});
  },
  date(fieldName='date') {
    return query(fieldName)
        .exists()
        .isDate(['YYYY-MM-DD']);
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

const errorFormatter = ({location, msg, param, value, nestedErrors}) => {
  return {location, msg, param, value, nestedErrors};
};

const checkErrors = (req) => {
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return errors.array();
  }
};

const sendError = (res, errors) => {
  return res.status(422).json({errors});
};

const validationErrorHandler = (fn) =>
  function(...args) {
    const errors = checkErrors(args[0]);
    if (errors) {
      throw createError(400, 'Validation Error', {details: errors});
    }
    return fn(...args);
  };

const asyncHandler = (fn) =>
  function(...args) {
    const fnReturn = fn(...args);
    const next = args[args.length - 1];
    return Promise.resolve(fnReturn).catch(next);
  };

const errorHandler = (fn) =>
  asyncHandler(validationErrorHandler(fn));

module.exports = {
  defaultParams,
  validationChains,
  checkErrors,
  sendError,
  errorHandler,
  errorFormatter,
};
