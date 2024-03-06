import { Suspense, lazy } from "react";
import { Home } from "pages/Home";
import "../shared/styles/index.scss"

// const Home = lazy(() => "../pages/Home.jsx");

function App() {
  	return (
		<Suspense fallback="Loading...">
			{<Home/>}
		</Suspense>
  	);
}

export default App;