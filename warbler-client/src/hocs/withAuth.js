// HOCs is a simply a function that wraps another component

// This component is going to handle validation to make sure that a user is locked in 
// before they see that component

import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component {
        componentWillMount() {
            if(this.props.isAuthenticated === false){
                this.props.history.push("/signin");
            }
        }
        componentWillUpdate(nexProps) {
            if (nexProps.isAuthenticated === false) {
              this.props.history.push("/signin");
            }
        }
        render(){
            return <ComponentToBeRendered {...this.props} />
        }
    }


function mapStateToProps(state) {
        return {
            isAuthenticated: state.currentUser.isAuthenticated 
        }
    }

    return connect(mapStateToProps)(Authenticate);
}

