import { Route, Routes } from 'react-router-dom';
import { AppMenu } from 'components';
import {
  Home,
  SignIn,
  SignUp,
  Phonebook,
  Contacts,
  AddContact,
  NotExist,
} from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppMenu />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="phonebook" element={<Phonebook />}>
          <Route path="contacts" element={<Contacts />} />
          <Route path="add-contact" element={<AddContact />} />
        </Route>
        <Route path="*" element={<NotExist />} />
      </Route>
    </Routes>
  );
};
