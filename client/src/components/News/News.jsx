import React, { Component } from 'react';
// import style from './News.module.css';
// import PropTypes from 'prop-types';

class News extends Component {
    // Initialize the state
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/api/getList')
            .then(res => res.json())
            .then(list => this.setState({ list }))
    }

    render() {
        const { list } = this.state;

        return (
            <div className="App">
                <h1>Your news</h1>
                {list.length ? (
                    <div>
                        {list.map(({id, content}) => {
                            return(
                                <div key={id}>
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h2>No news :(</h2>
                    </div>
                )
                }
            </div>
        );
    }
}

export default News;
