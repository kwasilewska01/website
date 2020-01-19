import React, { Component } from 'react';
import '../components/ListItem.scss';
import ItemList from '../components/ItemList.jsx';


export default class ListItem extends Component {
      
    render() {
      return (
        <ul className="footer__itemList--unstyled">
            <ItemList 
                link="#aboutUs"
                itemList="O nas" 
                />
            <ItemList 
                link="#ourOffer"
                itemList="Nasza oferta"
                />
            <ItemList 
                link="#job"
                itemList="Praca"
                />
            <ItemList 
                link="#contact"
                itemList="Kontakt"
                />
        </ul>
    )}
}