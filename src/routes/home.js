import { h, Component } from 'preact';
import About from '../components/about.js';
import HelpForFree from '../components/helpforfree.js';
import TopTen from '../components/topten.js';

export default class Home extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    results: undefined
	  };
	}

	componentWillMount () {

		fetch('http://localhost:8080/api/v1/update').then(res => {
			res.json().then(res => {
				this.setState({
					results: res
				})
			})
		})

		setInterval(function() {
			fetch('http://localhost:8080/api/v1/update').then(res => {
				res.json().then(res => {
					this.setState({
						results: res
					})
				})
			})
		}.bind(this), 10000);
	}

	render() {
		return (
			<div>
        <HelpForFree/>
        <TopTen results={this.state.results}/>
				<About/>
			</div>
		);
	}
}
