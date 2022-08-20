import { lazy } from 'react';

export const AddContact = lazy(() =>
  import('../pages/AddContact/AddContact.jsx').then(module => ({
    ...module,
    default: module.AddContact,
  }))
);

export const Contacts = lazy(() =>
  import('../pages/Contacts/Contacts.jsx').then(module => ({
    ...module,
    default: module.Contacts,
  }))
);

export const Home = lazy(() =>
  import('../pages/Home/Home.jsx').then(module => ({
    ...module,
    default: module.Home,
  }))
);

export const Phonebook = lazy(() =>
  import('../pages/Phonebook/Phonebook.jsx').then(module => ({
    ...module,
    default: module.Phonebook,
  }))
);

export const SignIn = lazy(() =>
  import('../pages/SignIn/SignIn.jsx').then(module => ({
    ...module,
    default: module.SignIn,
  }))
);

export const SignUp = lazy(() =>
  import('../pages/SignUp/SignUp.jsx').then(module => ({
    ...module,
    default: module.SignUp,
  }))
);

export const NotExist = lazy(() =>
  import('../pages/NotExist/NotExist.jsx').then(module => ({
    ...module,
    default: module.NotExist,
  }))
);
