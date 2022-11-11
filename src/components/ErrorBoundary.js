import { Component } from "react";

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error) {
		// console.log(error);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h2 style={{ color: "red", "text-align": "center" }}>Something went very wrong!</h2>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
