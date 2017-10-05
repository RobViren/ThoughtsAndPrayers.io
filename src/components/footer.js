import { h, Component } from 'preact';

export default class Footer extends Component {

	componentWillMount(){
	}

	render() {
		return (
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>ThoughtsAndPrayers.io</strong> <a> Copyright 2017 </a>
            </p>
          </div>
        </div>
      </footer>
		);
	}
}
