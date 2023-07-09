import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./fi.jpg"
								alt="Fi Money"
								className="work-image"
							/>
							<div className="work-title">
								Software Development Engineer (SDE-1)</div>
							<div className="work-subtitle">
								Fi Money
							</div>
							<div className="work-duration">MAY 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./fi.jpg"
								alt="Fi Money"
								className="work-image"
							/>
							<div className="work-title">Software Development Engineering Intern</div>
							<div className="work-subtitle">
								Fi Money
							</div>
							<div className="work-duration">JULy 2021 - SEPT 2021</div>
						</div>
						<div className="work">
						<img
							src="https://media.licdn.com/dms/image/C560BAQH8HvLbUVXbhw/company-logo_200_200/0/1623637460029?e=1697068800&v=beta&t=OE92I6EdyCBdNR3xoyvSr70rUaqky55qAtPhT8JDAd0"
							alt="twitter"
							className="work-image"
						/>
						<div className="work-title">Web Developer </div>
						<div className="work-subtitle">
							Ikash Education
						</div>
						<div className="work-duration">May 2021- JULY 2021</div>
					</div>

						<div className="work">
							<img
								src="https://st2.depositphotos.com/3390741/6203/v/600/depositphotos_62039657-stock-illustration-newborn-little-baby.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Web Developer Intern</div>
							<div className="work-subtitle">
								Web Development Intern
							</div>
							<div className="work-duration">JAN 2023 - MAY 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
