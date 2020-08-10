const {validationResult, query, oneOf} = require('express-validator');
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
  exist(fields, options, message='The parameter must exist.') {
    return query(fields)
        .exists(options).bail()
        .withMessage(message);
  },
  access_token() {
    return this.exist('access_token',
        {checkFalsy: true, checkNull: true});
  },
  id(fieldName='id') {
    return this.exist(fieldName,
        {checkNull: true, checkFalsy: true})
        .custom((id) => Types.ObjectId.isValid(id))
        .withMessage('Invalid ID: Argument passed in must be a single ' +
            'String of 12 bytes or a string of 24 hex characters.')
        .bail()
        .customSanitizer((id) => new Types.ObjectId(id));
  },
  ids() {
    return this.exist('ids',
        {checkNull: true, checkFalsy: true})
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
  name(fieldName='name') {
    return this.exist(fieldName)
        .isString().isLength({max: 100});
  },
  email() {
    return this.exist('email')
        .isEmail();
  },
  password() {
    return this.exist('password')
        .isString().isLength({max: 100});
  },
  date(fieldName='date') {
    return this.exist(fieldName)
        .isDate(['YYYY-MM-DD']);
  },
  count(min=0, max=50) {
    return this.exist('count')
        .isInt({min, max}).toInt();
  },
  offset(min = 0, max = undefined) {
    const options = max ? {min, max} : {min};
    return this.exist('offset')
        .isInt(options).toInt();
  },
  text() {
    return this.exist('text')
        .isString().isLength({max: 2000});
  },
  title() {
    return this.exist('title')
        .isString().isLength({max: 100});
  },
  attachments() {
    return this.exist('attachments')
        .customSanitizer((value) => value.split(','));
  },
  existOneOf(...params) {
    return oneOf(
        params.map((param) => this.exist(param)),
        `One of the parameters (${params.join(', ')}) must exist.`,
    );
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
