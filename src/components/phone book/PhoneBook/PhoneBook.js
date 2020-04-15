import React, {Component} from 'react';
import Contact from '../Contact';
import SearchPanel from '../SearchPanel'
import './PhoneBook.css';

export default class Contacts extends Component{
    state = {
        contacts : [{
          firstName: "Барней",
          lastName: "Стинсовский",
          phone: "380956319521",
          gender: "male"
      }, {
          firstName: "Робин",
          lastName: "Щербатская",
          phone: "380931460123",
          gender: "female"
      }, {
          firstName: "Аномный",
          lastName: "Анонимус",
          phone: "380666666666"
      }, {
          firstName: "Лилия",
          lastName: "Олдровна",
          phone: "380504691254",
          gender: "female"
      }, {
          firstName: "Маршэн",
          lastName: "Эриксонян",
          phone: "380739432123",
          gender: "male"
      }, {
          firstName: "Теодор",
          lastName: "Мотсбэс",
          phone: "380956319521",
          gender: "male"
        }],
        search : "", 
      }

    onSearchChange = (search) =>{
        this.setState({search})
    };

    onCheckBoxChange = (checkM)=>{
        this.setState({checkM})
    };
    
    search(items,search){

        if (search.length === 0){
            return items;
        } else {
            return items.filter((item) => {
                return item.firstName.toLowerCase().indexOf(search.toLowerCase()) > -1 
                || item.phone.indexOf(search) > -1 ;

            })
        }
    }
   
    render(){  
        const {contacts, search} = this.state;
        const visibleItems = this.search(contacts, search);
        const contact = visibleItems.map((item,index) => { 
            return (
                <div key={item+index} className = "allContacts">             
                    <Contact {...item}/> 
                </div>
            )
        })
        
        return (
            <div className="fullpage">
                <div className="appDiv">
                <SearchPanel onSearchChange = {this.onSearchChange}/>
                {contact}
                </div>
            </div>
        )        
    }
}

