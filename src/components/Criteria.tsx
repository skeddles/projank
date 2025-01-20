
import '../css/Criteria.css'

interface CriteraProps {
	name: string;
}


export default function Criteria ({name}: CriteraProps) {
	return (<div className="Criteria">
		<h3>Name</h3>
		<input type="text" />

	</div>)
}