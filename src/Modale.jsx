import React from "react";
import "./Modale.css";

const Modale = ({
	isOpen,
	close,
	children,
	title = "",
	style = {},
	closeLabel = "x", 
	closeButtonClassName = "modale-close", 
	onClose = close, 
}) => {
	if (!isOpen) return null;

	return (
		<div
			className="modale-overlay"
			style={{ ...defaultStyles.overlay, ...style.overlay }}
		>
			<div
				className="container"
				style={{ ...defaultStyles.container, ...style.container }}
			>
				<div
					className="modale-content"
					style={{ ...defaultStyles.modal, ...style.modal }}
				>
					{title && (
						<h1
							className="modale-title"
							style={{ ...defaultStyles.title, ...style.title }}
						>
							{title}
						</h1>
					)}
					{children}
					<button
						className={closeButtonClassName} 
						onClick={onClose} 
						style={{ ...defaultStyles.closeButton, ...style.closeButton }}
					>
						{closeLabel} 
					</button>
				</div>
			</div>
		</div>
	);
};

const defaultStyles = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 1000,
	},
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	modal: {
		position: "relative",
		backgroundColor: "#fff",
		borderRadius: "8px",
		padding: "20px",
		width: "500px",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
	},
	closeButton: {
		position: "absolute",
		top: "-15px",
		right: "-15px",
		background: "none",
		border: "none",
		fontSize: "16px",
		cursor: "pointer",
		height: "30px",
		width: "30px",
		borderRadius:"50%"
	},
	title: {
		margin: "0 0 20px",
		fontSize: "16px",
		textAlign: "left",
	},
};

export default Modale;
