import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { route } from 'preact-router';

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			navToggle: false,
			navStyle: 'button navbar-burger is-hidden-tablet',
			navBarStyle: 'navbar-menu'
		};
	}

	toggleNav = () => {
		this.setState({
			navToggle: !this.state.navToggle
		});

		if (!this.state.navToggle) {
			this.setState({
				navStyle: 'button navbar-burger is-hidden-tablet',
				navBarStyle: 'navbar-menu'
			});
		}
		else if (this.state.navToggle) {
			this.setState({
				navStyle: 'button navbar-burger is-hidden-tablet is-active',
				navBarStyle: 'navbar-menu is-active'
			});
		}
	}

	componentWillMount() {
	}

	componentWillUpdate() {
		//Reset stupid mobile nav
		this.setState({
			navToggle: false,
			navStyle: 'button navbar-burger is-hidden-tablet'
		})
	}

	render() {
		return (
			<nav class="navbar is-info" style="position: fixed;right: 0;left: 0;  z-index: 1030;">
		  <div class="navbar-brand">
		    <a class="navbar-item" href="http://www.thoughtsandprayers.io/">
					<h1 class="title" style="color: white">T&P</h1>
		    </a>
		    <div class="navbar-burger burger" data-target="navMenuColorinfo-example" onClick={this.toggleNav}>
		      <span></span>
		      <span></span>
		      <span></span>
		    </div>
		  </div>

		  <div id="navMenuColorinfo-example" class={this.state.navBarStyle}>
		    <div class="navbar-start">
		      <a class="navbar-item" href="#help-for-free">
		        Help
		      </a>
					<a class="navbar-item" href="#top-of-our-mind">
		        Results
		      </a>
					<a class="navbar-item" href="#about-text">
		        About
		      </a>
		    </div>

		    <div class="navbar-end">
		      <div class="navbar-item">
		        <div class="field is-grouped">
		          <p class="control">
		            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=You make thinking and praying even better!;hashtags=thoughtsandprayersio&amp;&amp;via=TandPio">
		              <span class="icon">
		                <i class="fa fa-twitter"></i>
		              </span>
		              <span>
		                Tweet
		              </span>
		            </a>
		          </p>
		          <p class="control">
		            <a class="button is-inverted" href="https://www.facebook.com/thoughtsandprayers.io/">
		              <span class="icon">
		                <i class="fa fa-facebook"></i>
		              </span>
		              <span>Share</span>
		            </a>
		          </p>
							<p class="control">
		            <a class="button is-inverted" href="https://github.com/RobViren/ThoughtsAndPrayers.io">
		              <span class="icon">
		                <i class="fa fa-github"></i>
		              </span>
		              <span>Code</span>
		            </a>
		          </p>
		        </div>
		      </div>
		    </div>
		  </div>
		</nav>
		);
	}
}
