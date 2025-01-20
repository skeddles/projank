import '../css/ProjectList.css'

interface Project {
	title: string;
	description: string;
	score?: number;
}

interface ProjectListProps {
	projects: Project[];
}

export default function ProjectList({projects}: ProjectListProps) {
	return (<ol className="ProjectList">
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
	</ol>)
}