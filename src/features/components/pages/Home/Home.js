import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CampActions } from '../../../redux/actions'
import './home.scss'


class Home extends Component {
    state = {
        listing_number: 0
    };


    handleChangeInput = (e) => {
        this.setState({listing_number: e.target.value});
    };

    send = () => {
        this.props.getSeveralCamps(this.state.listing_number);
        this.setState({
            listing_number:0
        })
    };

    render() {
        return (
            <div className="home-container">
                <div className="input-wrapper">
                    <input className="listing-input" type="number" placeholder="Set number of listings" onChange={this.handleChangeInput}/>
                    <button className="send" onClick={this.send}>Submit</button>
                </div>
                <ListingForm camps={this.props.camps}/>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        camps: state.campReducer,
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(CampActions, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));



class ListingForm extends Component {

    render() {
        const { camps } = this.props;
        return (
            <div className="listing-form">
                <div className="items">
                    {camps.map(camp=> {
                        return (
                            <div key={camp.id}>
                                <span> {camp.slug}</span>
                                <br/>
                                <span className="price">price: ${camp.price}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}