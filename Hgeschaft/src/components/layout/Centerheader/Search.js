import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    handleSubmit = (e) => {
        alert('A store was submitted: ' + this.state.value);
        e.preventDefault();
    }
    render() {

        return (
            <div className="sb-quickSearch search-info-content">
                <Form onSubmit={this.handleSubmit} className="sb-searchpro">
                    <div className="input-group sb-quickSearch-form">
                        <Form.Row className="d-inline-flex flex-grow-1">
                            <Form.Control placeholder="Search laptops/tablets" value={this.state.value} onChange={this.handleChange} className="sb-searchpro-input" />
                            <Button className="sb-quicksearch-btn" type="submit" >
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </Form.Row>
                    </div>
                </Form>
            </div >
        )
    }
}
