import React from 'react';
import ReactDom from 'react-dom';

class CounterApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countLike: 0,
			countLove: 0,
			countLol: 0,
			countScary: 0,
			countSad: 0,
		};
	}

	handleIncrementLike() {
		this.setState({
			countLike: this.state.countLike + 1
		});
	}

	handleIncrementLove() {
		this.setState({
			countLove: this.state.countLove + 1
		});
	}

	handleIncrementLol() {
		this.setState({
			countLol: this.state.countLol + 1
		});
	}

	handleIncrementScary() {
		this.setState({
			countScary: this.state.countScary + 1
		});
	}

	handleIncrementSad() {
		this.setState({
			countSad: this.state.countSad + 1
		});
	}

	render() {
		return (
			<div>
				<div>
					<button onClick={() => this.handleIncrementLike()} className = "buttonLike">
						<span role="img">👍</span>
						<div id="counterLike">{this.state.countLike}</div>
					</button>
					<button onClick={() => this.handleIncrementLove()} className = "buttonLove">
						<span role="img">😍</span>
						<div id="conterLove">{this.state.countLove}</div>
					</button>
					<button onClick={() => this.handleIncrementLol()} className = "buttonLol">
						<span role="img">🤣</span>
						<div id="counterLol">{this.state.countLol}</div>
					</button>
					<button onClick={() => this.handleIncrementScary()} className = "buttonScary">
						<span role="img">😨</span>
						<div id="counterScary">{this.state.countScary}</div>
					</button>
					<button onClick={() => this.handleIncrementSad()} className = "buttonSad">
						<span role="img">😭</span>
						<div id="counterSad">{this.state.countSad}</div>
					</button>
				</div>
			</div>

		);
	}
}

export default CounterApp;