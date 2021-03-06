import React, { Component } from 'react';
import Header from './header';
import headerData from './header-data';

import teamPicture from '../assets/images/group-picture.png';

class AboutPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			descriptionStyling: {
				display: 'flex'
			},
			teamLinksStyling: {
				display: 'none'
			},
			buttonLabel: 'MEET THE TEAM',
			nextContainer: 'page-two'
		};
		this.toggledContainers = this.toggledContainers.bind(this);
	}

	toggledContainers(page) {
		let newState = {};
		switch (page) {
			case 'page-one':
				newState = {
					descriptionStyling: {
						display: 'flex'
					},
					teamLinksStyling: {
						display: 'none'
					},
					buttonLabel: 'MEET THE TEAM',
					nextContainer: 'page-two'
				};
				break;
			case 'page-two':
				newState = {
					descriptionStyling: {
						display: 'none'
					},
					teamLinksStyling: {
						display: 'flex'
					},
					buttonLabel: 'ABOUT CLOSE YOUR TABS',
					nextContainer: 'page-one'
				};
				break;
			default:
				return;
		}
		this.setState(newState);
	}

	render() {
		return (
			<div className="about-page">
				<div className="header-container">
					<a href="/dashboard" className="back-link-container">
						<div className="nav-link">BACK</div>
					</a>
				</div>
				<div className="about-page-title-container">
					<div className="about-page-title">MEET THE TABS TEAM</div>
				</div>
				<div className="about-page-container">
					<div className="team-picture-container">
						<img className="team-picture" src={teamPicture} />
					</div>
					<div className="about-page-content-container">
						<div className="description-container" style={this.state.descriptionStyling}>
							<div className="about-content-title">We make tabs work for you.</div>
							<p className="description">
								<b>THE IDEA IS SIMPLE: </b>create a tool that would encourage people to close their
								tabs. What started off as a simple Chrome extension developed into a full web
								application with the future of allowing users to take their tabs across browsers
								and devices. Even as our app grows, we hope to help our users take back control of
								their tabs.
								<br />
								<br />
								<b>TECHNOLOGIES USED:</b> Chrome Platform APIs, Chrome Extension, Chrome Developer
								Tools, Google OAuth, ReactJS, React-Router-DOM, Axios, XMLHTTPRequests, JavaScript,
								HTML5, CSS3, Flexbox, NodeJS, MySQL, Amazon Web Services, Passport, Express
							</p>
						</div>
						<div className="team-members-container" style={this.state.teamLinksStyling}>
							<div className="first-row">
								<div className="team-member">
									<div className="team-member-name">
										<p>Andrea Wayte</p>
									</div>
									<div className="team-member-links-container">
										<div className="team-member-link">
											<a href="https://github.com/andreasandpiper" target="_blank">
												<i className="fab fa-github" />
											</a>
										</div>
										<div className="team-member-link">
											<a href="http://www.andreawayte.com/" target="_blank">
												<i className="fas fa-address-card" />
											</a>
										</div>
										<div className="team-member-link">
											<a href="https://www.linkedin.com/in/andrea-wayte/" target="_blank">
												<i className="fab fa-linkedin" />
											</a>
										</div>
									</div>
								</div>
								<div className="team-member">
									<div className="team-member-name">
										<p>Kelcey Lorenzo</p>
									</div>
									<div className="team-member-links-container">
										<div className="team-member-link">
											<a href="https://github.com/m13kelore/" target="_blank">
												<i className="fab fa-github" />
											</a>
										</div>
										<div className="team-member-link">
											<a href="http://www.kelceylorenzo.com/" target="_blank">
												<i className="fas fa-address-card" />
											</a>
										</div>
										<div className="team-member-link">
											<a href="https://www.linkedin.com/in/kelcey-lorenzo/" target="_blank">
												<i className="fab fa-linkedin" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="second-row">
								<div className="team-member">
									<div className="team-member-name">
										<p>Nick Quan</p>
									</div>
									<div className="team-member-links-container">
										<div className="team-member-link">
											<a href="https://github.com/nickkquan" target="_blank">
												<i className="fab fa-github" />
											</a>
										</div>
										<div className="team-member-link">
											<a href="http://nickquan.com/" target="_blank">
												<i className="fas fa-address-card" />
											</a>
										</div>
										<div className="team-member-link">
											<a href="https://www.linkedin.com/in/nick-quan/" target="_blank">
												<i className="fab fa-linkedin" />
											</a>
										</div>
									</div>
								</div>
								<div className="team-member">
									<div className="team-member-name">
										<p>James Kirsch</p>
									</div>
									<div className="team-member-links-container">
										<div className="team-member-link">
											<a href="https://github.com/jkirsch-LF " target="_blank">
												<i className="fab fa-github" />
											</a>
										</div>
										<div className="team-member-link">
											<a href="http://jkirsch.tech/" target="_blank">
												<i className="fas fa-address-card" />
											</a>
										</div>
										<div className="team-member-link">
											<a href="https://www.linkedin.com/in/jameskirsch/" target="_blank">
												<i className="fab fa-linkedin" />
											</a>
										</div>
									</div>
								</div>

								<div className="team-member">
									<div className="team-member-name">
										<p>Henry Moon</p>
									</div>
									<div className="team-member-links-container">
										<div className="team-member-link">
											<a href="https://github.com/HyeManMoon" target="_blank">
												<i className="fab fa-github" />
											</a>
										</div>
										<div className="team-member-link">
											<a href="http://henrymoon.net/" target="_blank">
												<i className="fas fa-address-card" />
											</a>
										</div>
										<div className="team-member-link">
											<a
												href="https://www.linkedin.com/in/hye-moon-59405a157/"
												target="_blank"
											>
												<i className="fab fa-linkedin" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="page-switch-container">
							<button
								className="page-switch"
								onClick={() => this.toggledContainers(this.state.nextContainer)}
							>
								{this.state.buttonLabel}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutPage;
