import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faGithub} />
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faLinkedin} />
					</div>
					<div className="social-text">Connect on LinkedIn</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faStackOverflow} />
					</div>
					<div className="social-text">Stack Overflow</div>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
