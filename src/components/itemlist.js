import React, {Component} from 'react';
import ItemCard from './itemcard';

class ItemList extends Component {
    render() {

        return <div className="flex flex-column">
            <h1 className="center nowrap dib">{this.props.name}</h1>
            <div className="flex flex-wrap justify-center people-list overflow-y-auto">
                {this.props.data.map((d) => {
                    //strip the id off the end of the url
                    let url = d.url.split("/");
                    url = url[url.length - 2];
                    return (

                        <ItemCard data={d} key={d.name} to={this.props.to + "/" + url} logo={this.props.logo} displayname={d[this.props.displayname] || d.name}/>

                    )
                })}
            </div>
        </div>
    }
}

export default ItemList