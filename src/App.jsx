import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";
import ArchivedPage from "./pages/ArchivedPage";
import {useState} from "react";
import {useEffect} from "react";
import {getUserLogged, putAccessToken} from "./utils/api";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
	const [authedUser, setAuthedUser] = useState(null);

	useEffect(() => {
		const fetchedUser = async () => {
			const {data} = await getUserLogged();
			setAuthedUser(data);
		};
		fetchedUser();
	}, []);

	const onLoginSuccess = async ({accessToken}) => {
		putAccessToken(accessToken);
		const {data} = await getUserLogged();
		setAuthedUser(data);
	};

	const onLogout = () => {
		setAuthedUser(null);
		putAccessToken("");
	};

	if (authedUser === null) {
		return (
			<section className="min-h-screen">
				<header className="container py-6 lg:py-8">
					<nav className="flex justify-between items-center">
						<Link to="/">
							<h1 className="text-primary-50 text-3xl font-bold">Catatan Denjay</h1>
						</Link>
					</nav>
				</header>
				<main className="container">
					<Routes>
						<Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
						<Route path="/register" element={<RegisterPage />} />
					</Routes>
				</main>
			</section>
		);
	}

	return (
		<section className="min-h-screen">
			<header className="container py-6 lg:py-8">
				<nav className="flex justify-between items-center">
					<Link to="/">
						<h1 className="text-primary-50 text-3xl font-bold">Denjay's Note</h1>
					</Link>
					<Navbar logout={onLogout} />
				</nav>
			</header>
			<main className="container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/archived" element={<ArchivedPage />} />
					<Route path="/notes/new" element={<AddPage />} />
					<Route path="/notes/:id" element={<DetailPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
		</section>
	);
}

export default App;
