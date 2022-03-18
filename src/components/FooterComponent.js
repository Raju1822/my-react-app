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
                <footer className = "text-center footer">
                    <span className="text-muted ">All Rights Reserved @Raju_Sahu 2022</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent