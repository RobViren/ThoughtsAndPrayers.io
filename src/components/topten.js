import { h, Component } from 'preact';

export default class TopTen extends Component {
	constructor(props) {
	  super(props);
	}

	componentDidUpdate(){
		console.log(this.props.results)
	}

	render() {
		return (
			<div class="card" id="top-of-our-mind">
				<div class="column is-10 is-offset-1">
					<div class="box">
            <h1 class="title">Results</h1>
						<h1 class="subtitle">The impact made this week</h1>
						<nav class="level is-mobile">
						  <div class="level-item has-text-centered">
						    <div>
						      <p class="heading">People On Now</p>
						      <p class="title">{this.props.results && Math.floor(this.props.results.hashesPerSecond / 10)}</p>
						    </div>
						  </div>
						  <div class="level-item has-text-centered">
						    <div>
						      <p class="heading">Global Rate T&P/s</p>
						      <p class="title">{this.props.results && this.props.results.hashesPerSecond}</p>
						    </div>
						  </div>
						</nav>
						<nav class="level is-mobile">
							<div class="level-item has-text-centered">
								<div>
									<p class="heading">Global Total</p>
									<p class="title">{this.props.results && (this.props.results.hashesTotal/1000).toFixed(0) + " k"} </p>
								</div>
							</div>
							<div class="level-item has-text-centered">
								<div>
									<p class="heading">USD Paid Out So Far</p>
									<p class="title">{this.props.results && (this.props.results.xmrPending * 100).toFixed(1)}</p>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}
