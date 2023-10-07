import { passwordRegex, youtubeLinkPattern } from './regexp';

const textsRules = {
  required: (fieldName) => `${fieldName} is required.`,
  minLength: (fieldName, minLength) => `${fieldName} should have more then ${minLength} symbols.`,
  maxLength: (fieldName, maxLength) => `${fieldName} should have more then ${maxLength} symbols.`,
};

// eslint-disable-next-line max-len
const passwordPattern = { value: passwordRegex, message: 'The password must contain only Latin characters, at least one uppercase character, and at least one number.' };
const linkPattern = { value: youtubeLinkPattern, message: 'Incorrect link.' };

export const registrationRules = {
  firstName: {
    required: { value: true, message: textsRules.required('First name') },
  },
  lastName: {
    required: { value: true, message: textsRules.required('Last name') },
  },
  userName: {
    required: { value: true, message: textsRules.required('Username') },
    minLength: { value: 3, message: textsRules.minLength('Username', 3) },
    maxLength: { value: 20, message: textsRules.maxLength('Username', 20) },
  },
  password: {
    required: { value: true, message: textsRules.required('Password') },
    minLength: { value: 8, message: textsRules.minLength('Password', 8) },
    maxLength: { value: 32, message: textsRules.maxLength('Password', 32) },
    pattern: passwordPattern,
  },
  about: {
    required: { value: true, message: textsRules.required('About field') },
    maxLength: { value: 200, message: textsRules.maxLength('About field', 200) },
  },
};

export const lessonCreatingRules = {
  title: {
    required: { value: true, message: textsRules.required('Title') },
    maxLength: { value: 30, message: textsRules.maxLength('Title', 30) },
  },
  description: {
    required: { value: true, message: textsRules.required('Description') },
    maxLength: { value: 200, message: textsRules.maxLength('Description', 200) },
  },
  link: {
    pattern: linkPattern,
  },
};
