import { useEffect, useState } from 'react';

function App() {
	const [blogs, setBogs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000')
			.then((res) => res.json())
			.then((data) => setBogs(data));
	}, []);

	return (
		<div className="App">
			<header>
				<h1>My blogs</h1>
			</header>
			<div>
				{blogs.map((blog) => (
					<div>
						<h5>{blog.title}</h5>
						<p>{blog.id}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
