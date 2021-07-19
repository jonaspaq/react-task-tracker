import React from "react";
import '../../css/components/atoms/RemoveButton.css'

export default class RemoveButton extends React.Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.onClick()
    }

    render() {
        return (
            <i className={`bi bi-trash-fill remove-button ${this.props.className}`} onClick={this.onClick}></i>
        )
    }
}