// @flow

import React from 'react';

type Props = {
    count: number,
}

type State = {
    num: number,
}
class Counter extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            num: 8,
        }
        // this.onShow = this.onShow.bind(this);
    }
    static defaultProps = {
        count: 12
    }
    onShow(e: SyntheticEvent<HTMLButtonElement>, num: number ) {
        console.log(num);
    }
    render() {
        return (
            <div className="Counter">
                <p>{this.props.count}</p>
                <button onClick={(e) => this.onShow(e,this.state.num)}>+</button>
                <button>-</button>
            </div>
        )
    }
}

export default Counter;