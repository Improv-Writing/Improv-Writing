import React from 'react';
import ReactDom from 'react-dom';

class CounterApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	handleIncrement() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div>
				<div>
					<button onClick={() => this.handleIncrement()} className = "buttonLike">
						<span role="img">👍</span>
						<div id="counterLike">{this.state.count}</div>
					</button>
					<button onClick={() => this.handleIncrement()} className = "buttonLove">
						<span role="img">😍</span>
						<div id="conterLove">{this.state.count}</div>
					</button>
					<button onClick={() => this.handleIncrement()} className = "buttonLol">
						<span role="img">🤣</span>
						<div id="counterLol">{this.state.count}</div>
					</button>
					<button onClick={() => this.handleIncrement()} className = "buttonScary">
						<span role="img">😨</span>
						<div id="counterScary">{this.state.count}</div>
					</button>
					<button onClick={() => this.handleIncrement()} className = "buttonSad">
						<span role="img">😭</span>
						<div id="counterSad">{this.state.count}</div>
					</button>
				</div>
			</div>

		);
	}
}

export default CounterApp;