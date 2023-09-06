import React, { Component } from 'react';
import LangCardSet from "./LangCardSet";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div class="jumbotron text-center">
                <center>
                    <h1 class="hometitle">Lingogrind</h1>
                    <p>
                    Learning a new language can be a daunting task, and each language presents its own unique challenges. 
                    Lingogrind caters crash courses and practice tools to get you up and running in no time. 
                    Pick a language down below to see available lessons!
                    </p>
                </center>
            </div>
            <center>
                <LangCardSet />
            </center>
            </>
        );
    }
}