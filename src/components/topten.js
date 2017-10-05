import { h, Component } from 'preact';

export default class TopTen extends Component {
	constructor(props) {
	  super(props);
	}

	componentWillMount(){
		var disqus_config = function () {
		this.page.url = "/";  // Replace PAGE_URL with your page's canonical URL variable
		this.page.identifier = "HOME"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};
		(function() { // DON'T EDIT BELOW THIS LINE
		var d = document, s = d.createElement('script');
		s.src = 'https://www-thoughtsandprayers-io.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
		})();
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
					<div id="disqus_thread"></div>
				</div>
			</div>
		);
	}
}
