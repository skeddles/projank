
import '../css/Settings.css'

interface SettingsProps {
	theme: string;
	setTheme: (theme: string) => void;
	criteria: string[];
	setCriteria: (criteria: string[]) => void;
}

export default function Settings({theme, setTheme, criteria, setCriteria}: SettingsProps) {

	function handleAddCriteria() {
		setCriteria([...criteria, ""]);
	}

	function handleCriteriaChange(index: number) {
		return function(e: React.ChangeEvent<HTMLInputElement>) {
			const newCriteria = [...criteria];
			newCriteria[index] = e.target.value;
			setCriteria(newCriteria);
		}
	}

	return (<div className="Settings">

		<h2>Rating Critera</h2>

		{criteria.map((criteria, index) => (
			<input key={index} type="text" value={criteria} onChange={handleCriteriaChange(index)} />
		))}
		<p><button onClick={handleAddCriteria}>Add Criteria</button></p>

		<h2>Theme</h2>

		<select value={theme} onChange={e=>setTheme(e.target.value)}>
			<option value="sky">Sky</option>
		</select>

	</div>)
}