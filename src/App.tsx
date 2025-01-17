import { useState } from 'react'

import './css/themes.css'
import './css/App.css'
import './css/ProjectList.css'

interface Project {
	title: string;
	description: string;
	score?: number;
}


const DEMO_DATA = [
	{
		title: 'Project 1',
		description: 'This is a description of project 1'
	},
	{
		title: 'Project 2',
		description: 'This is a description of project 2'
	},
	{
		title: 'Project 3',
		description: 'This is a description of project 3'
	},
	{
		title: 'Project 4',
		description: 'This is a description of project 4'
	},
	{
		title: 'Project 1',
		description: 'This is a description of project 1'
	},
	{
		title: 'Project 2',
		description: 'This is a description of project 2'
	},
	{
		title: 'Project 3',
		description: 'This is a description of project 3'
	},
	{
		title: 'Project 4',
		description: 'This is a description of project 4'
	},
	{
		title: 'Project 1',
		description: 'This is a description of project 1'
	},
	{
		title: 'Project 2',
		description: 'This is a description of project 2'
	},
	{
		title: 'Project 3',
		description: 'This is a description of project 3'
	},
	{
		title: 'Project 4',
		description: 'This is a description of project 4'
	},

];

function App() {

	const [projects, setProjects] = useState<Project[]>(DEMO_DATA.map(p=>({...p, score: 10})));

	const [theme, setTheme] = useState(localStorage.getItem("theme") || "sky");

	return (<div className={"App theme-"+theme} >

		<ol className="ProjectList">
		{projects.map((project, index) => (
			<li key={index}>
				<div className="info">
					<h2>{project.title}</h2>
					<p>{project.description}</p>
				</div>
				<div className="score">
					<h2>{project.score}</h2>
				</div>
			</li>
		))}
		</ol>
	</div>)
}

export default App