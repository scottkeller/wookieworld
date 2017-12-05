import React, {Component} from 'react';
import '../assets/transitions.css';

class ItemDetail extends Component {
    render() {

        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="flex flex-column"><h1 className="nowrap flex center">{this.props.displayname || this.props.data.name}</h1>
                    <div className="flex center w-100 w-80-ns mh2">
                        <div className="flex flex-auto overflow-y-auto">
                            <dl className="lh-title w-100 tc">
                                {Object.keys(this.props.data).map((k) => {
                                    return (
                                        Array.isArray(this.props.data[k]) ? "" :
                                            <div
                                                className=" br3 tl pa1 mt0 bb b--light-yellow bg-blue light-yellow overflow-y-auto">
                                                <dt className="dib w-30-l f6 b ttu pa2">{k}:</dt>
                                                <dd className="dib mh1">{this.props.data[k]}</dd>
                                            </div>

                                    )

                                })}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default ItemDetail