import React, { Component } from 'react';
import { Redirect, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { validateFunction } from "immunitet.js";
import toastr from "toastr";
import 'toastr/build/toastr.min.css'

import { CampActions } from '../../../redux/actions'
import { campValidationRules } from "../../../helpers/form-validation";
import './home.scss'


class Home extends Component {

    send = (number) => {
      this.props.getSeveralCamps(number)
    };

    getValidatedNumber = validateFunction(this.send, campValidationRules);

    render() {
        return (
            <div className="home-container">
                <ListingForm
                    camps = {this.props.camps}
                    send  = {this.getValidatedNumber}
                />
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

    state = {
        listing_number: 0,
        redirect: false
    };


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    };

    handleChangeInput = (e) => {
        this.setState({listing_number: e.target.value});
    };


    validateNumber = (e) => {
        e.preventDefault();
        let { listing_number } = this.state;
        const { send } = this.props;
        let error = null;
        listing_number = parseInt(listing_number);
        if (listing_number) {
            [, error] = send(listing_number);
        }

        if (error) {
            this.setState({
                errors: error.getErrors(true)
            });
            setTimeout(() => toastr.error('Please write a number from 1-10!'), 0);
            return;
        }

        this.setState({
            listing_number: 0,
            redirect: true
        })
    };

    render() {
        const { camps } = this.props;

        return (
            <div className="listing-form">
                {this.renderRedirect()}
                <div className="input-wrapper">
                    <input
                        className="listing-input" type="number"
                        placeholder="Set number of listings"
                        onChange={this.handleChangeInput}/>
                    <button
                        className="send"
                        onClick={this.validateNumber}
                    >Submit
                    </button>
                </div>
                <br/>
                <div className="items">
                    {camps.map(camp => {
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