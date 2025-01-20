import { useState } from 'react'

import ProjectList from './components/ProjectList'
import Settings from './components/Settings'

import './css/themes.css'
import './css/App.css'


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

	const [mode, setMode] = useState("view");

	const [criteria, setCriteria] = useState<string[]>([]);
	
	return (<div className={"App theme-"+theme} >
		<ProjectList projects={projects} />
		<Settings theme={theme} setTheme={setTheme} criteria={criteria} setCriteria={setCriteria} />
	</div>)
}

export default App