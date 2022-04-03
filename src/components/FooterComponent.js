import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className='container'>
                <footer className = "text-center footer p-4">
                    <span className="text-muted ">All Rights Reserved &copy;Raju Sahu  {new Date().toLocaleString()}</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent