const renameProperty = (obj, oldName, newName) => {
  if (oldName !== newName) {
    Object.defineProperty(obj, newName,
        Object.getOwnPropertyDescriptor(obj, oldName));
    delete obj[oldName];
  }
};

const formatDateToSend = (date) => {
  return new Date(date).getTime();
};

module.exports = {
  renameProperty,
  formatDateToSend,
};
