import React from "react";
import useInput from "../hooks/useInput";

const RegisterInput = ({onRegister}) => {
	const [name, onNameChange] = useInput("");
	const [email, onEmailChange] = useInput("");
	const [password, onPasswordChange] = useInput("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onRegister({name, email, password});
	};

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
			<div className="flex flex-col gap-2">
				<label htmlFor="name">Nama Lengkap</label>
				<input className="bg-primary-950 border border-primary-900 p-3 outline-none rounded-md" type="text" id="name" value={name} onChange={onNameChange} />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="email">Email</label>
				<input className="bg-primary-950 border border-primary-900 p-3 outline-none rounded-md" type="email" id="email" value={email} onChange={onEmailChange} />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="password">Password</label>
				<input className="bg-primary-950 border border-primary-900 p-3 outline-none rounded-md" type="password" id="password" value={password} onChange={onPasswordChange} />
			</div>
			<button className="bg-primary-900 p-3 mt-2 rounded-md" type="submit">
				Daftar
			</button>
		</form>
	);
};

export default RegisterInput;
