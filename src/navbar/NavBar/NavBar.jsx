import React from 'react';
import { ReactComponent as SubmitIcon } from '../icons/submitIcon.svg';
import { ReactComponent as HomeIcon } from '../icons/homeIcon.svg';
import { useHistory } from 'react-router-dom';
import { NavButton } from '../NavButton';
import './NavBar.css';

export const NavBar = () => {
    const { push } = useHistory();

    const buttons = [{
      id: 'home',
      label: 'Home',
      icon: <HomeIcon />,
      onClick: () => push('/'),
    }, {
      id: 'submit',
      label: 'Submit',
      icon: <SubmitIcon />,
      onClick: () => push('/submit'),
    }];
  return <div className="nav">
      {buttons.map(button => <NavButton key={button.id} {...button} />)}
    </div>
}

