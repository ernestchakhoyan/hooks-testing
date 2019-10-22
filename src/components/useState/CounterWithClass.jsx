import React from "react";

class CounterWithClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        const { count } = this.state;
        this.setState((prevState) => {
            console.log(prevState);
            return {
                count: count + 1
            }
        });
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <button onClick={ this.incrementCount }>{ count }</button>
            </div>
        );
    }
}

CounterWithClass.propTypes = {};

export default CounterWithClass;