import { h, Component } from 'preact';
import anime from 'animejs';
import '../lib/ch.min';

var miner;

export default class HelpForFree extends Component {
  constructor() {
    super();
	  this.state = {
  		rate: 0,
  		total: 0,
  		accepted: 0,
  		effort: .95,
  		input: "Default",
      praying: false
	   };
   }

	startMine = () =>{

    this.setState({
      praying: true
    })

    if(!miner){
      miner = new CoinHive.User('7zxPbgwLGfBU8YFqh8K1yaYPJz9j9Yz7', this.state.input, {
  			throttle: this.state.effort,
  			forceASMJS: false
  		});

  		miner.start();
  		setInterval(function() {
  			var hashesPerSecond = miner.getHashesPerSecond();
  			var totalHashes = miner.getTotalHashes();
  			var acceptedHashes = miner.getAcceptedHashes();

  			this.setState({
  				rate: hashesPerSecond,
  				total: totalHashes,
  				accepted: acceptedHashes
  			});

  		}.bind(this), 500);

      var duration = anime({
      targets: '.image-animation',
      translateX: [-50, 50],
      duration: 2000,
      loop: true,
      direction: 'alternate'
    });

    }
	}

	render() {
		return (
      <div>
      <section class="hero is-info">
				<div class="hero-body">
					<div class="container has-text-centered">
						<p class="title">
							Help With Zero Effort
						</p>
						<p class="subtitle">
							Thoughts, Prayers, and a Browser. That is it!
						</p>
						<img class="image-animation" onClick={this.startMine} style="padding: 0px 0px 10px 0px" src="../assets/icons/android-chrome-192x192.png" height="115" width="115" alt="Logo" href="#top"/>
					</div>
          <div align="center">
            {!this.state.praying && <button class="button is-info is-large is-inverted" onClick={this.startMine}>Click to Help</button>}
            {!this.state.praying && <p class="subtitle" style="padding: 10px 0px 0px 0px">or</p>}
            <a href="https://donate.makemydonation.org/donate/205612529" class="button is-info is-large is-inverted">Donate Directly</a>
            <p class="subtitle" style="padding: 10px 0px 0px 0px">to the chairity of the week</p>
            <p class="title" style="padding: 10px 0px 0px 0px">EASTERN NEVADA COMMUNITES COALITION</p>
          </div>
				</div>
			</section>
      {this.state.praying &&
        <div class="card" id="top-of-our-mind">
          <div class="column is-10 is-offset-1">
            <div class="box">
            <h1 class="title">Your Efforts</h1>
            <h1 class="subtitle">You can make an impact</h1>
              <nav class="level is-mobile">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Your Rate T&P/s</p>
                    <p class="title">{this.state.rate.toFixed(0)}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Your Total</p>
                    <p class="title">{this.state.total}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>}
      </div>
		);
	}
}
