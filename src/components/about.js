import { h, Component } from 'preact';

export default class About extends Component {

	componentWillMount(){
	}

	render() {
		return (
			<div class="card">
				<div class="column is-10 is-offset-1">
          <div class="box">
            <h1 class="title" id="about-text">About</h1>
  					<div class="box">
							<div class="content">
							<h1>Intro</h1>
							<p>{'You can help people with zero effort and only some CPU power. How can this be possible? Your CPU can help to mine a bitcoin like currency called XMR. One computer alone cannot mine lots, but many machines working together can. All you need to do is type in what you want to help, and click "Click to Help"'}</p>
							<h1>Impact</h1>
							<p>{'One Million \"Thoughts and Prayers\" equal out to about two cents, but if One Million people are helping that works out to about 1$ per second to a charity. So it can add up!'}</p>
							<h1>Process</h1>
							<p>{'The chairity of the week will be selected by a google form. The donation will go to the selected chairty at the end of the week. The payments will go through a service called '}<a href="http://makemydonation.org/" >{'MakeMyDonation'}</a>{'. The results of the weeks mining will also be posted on imgur and linked'}</p>
							<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdXGsAIMNZecJJ-gx-XsV4FUkWyT_vf1V2oRSzNP9BCN9ohTw/viewform?usp=sf_link">Link to form</a>
							<h1>{'Want to Help Code?'}</h1>
							<p>{'We are an open soruce effort that seeks to involve as many as possible to make a transparent and effective process. I need help to figure out elements I am not sure of yet, and want to make the best experince possible.'}</p>
							<h1>Why?</h1>
							<p>{'This is a small effort that could actually make a big impact. Have fun, use up power that is not your own, and of course keep things in your thoughts and prayers.'}</p>
							</div>
            </div>
					</div>
				</div>
			</div>
		);
	}
}
