import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component {
  render() {
    let idLocale = require('moment/locale/id');
    Moment.updateLocale('id', idLocale);
    return (
      <div>
        <br />
        <img src="/images/TODO.jpg" alt="avatar" />
        <br />
        <br />
        <h3>MY TO DO LIST</h3>
        <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
      </div>
    );
  }
}

export default Header;
