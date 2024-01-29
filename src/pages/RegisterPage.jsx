import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import {register} from "../utils/api";

const RegisterPage = () => {
	const navigate = useNavigate();

	async function onRegisterHandler(user) {
		const {error} = await register(user);

		if (!error) {
			navigate("/");
		}
	}

	return (
		<section className="space-y-4 text-primary-50 xl:px-64 mt-4 lg:mt-14">
			<h2 className="text-2xl font-bold">Silakan registrasi untuk melanjutkan</h2>
			<RegisterInput onRegister={onRegisterHandler} />
			<p>
				Sudah punya akun?
				<Link className="font-bold text-primary-500 underline" to="/login">
					Masuk di sini
				</Link>
			</p>
		</section>
	);
};

export default RegisterPage;
