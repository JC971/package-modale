import React from "react";
import "./Modale.css";

const Modale = ({ isOpen, close, children }) => {
	if (!isOpen) return null;

	return (
		<div className="modale-overlay">
			<div className="modale-content">
				<button onClick={close} className="modale-close">
					X
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modale;
