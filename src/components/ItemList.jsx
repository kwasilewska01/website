import React, { Component } from 'react';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link:"",
            itemList:"",
          };
        }
      
        render() {
          return (
            <li>
                <a href={this.props.link}>
                    {this.props.itemList}
                </a>
            </li>
    )}
}





          