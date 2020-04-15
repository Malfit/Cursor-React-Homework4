import React, {Component} from 'react';
import PhoneBook from '../../components/phone book/PhoneBook';


class Contacts extends Component {
    render() {
        return (
           <div className = "App">
                <PhoneBook />
           </div>
        )
      }
}

export default Contacts;