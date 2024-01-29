import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {login} from "../utils/api";
import LoginInput from "../components/LoginInput";

const LoginPage = ({loginSuccess}) => {
	async function onLogin({email, password}) {
		const {error, data} = await login({email, password});

		if (!error) {
			loginSuccess(data);
		}
	}

	return (
		<section className="space-y-4 text-primary-50 xl:px-64 mt-4 lg:mt-14">
			<h2 className="text-2xl font-bold">Silakan masuk untuk melanjutkan</h2>
			<LoginInput onLogin={onLogin} />
			<p>
				Belum punya akun?{" "}
				<Link className="font-bold text-primary-500 underline" to="/register">
					Daftar di sini
				</Link>
			</p>
		</section>
	);
};

LoginPage.propTypes = {
	loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
