import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import React from "react";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Internships & Learning"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">
								Machine Learning Intern
							</div>
							<div className="work-subtitle">
								Kashive Infotech
							</div>
							<div className="work-duration">2024</div>
						</div>

						<div className="work">
							<div className="work-title">
								Full Stack Developer Intern
							</div>
							<div className="work-subtitle">
								Spangles Infotech
							</div>
							<div className="work-duration">2025 (Ongoing)</div>
						</div>

						<div className="work">
							<div className="work-title">Currently Exploring</div>
							<div className="work-subtitle">
								Node, Unity, networking
							</div>
							<div className="work-duration">Now</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
