import React, { Component } from "react";
import DataComponent from "./Components/DataComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <DataComponent />
        );
    }
}
export default App;