import React, { ErrorInfo } from "react";
import "./App.css";
import Agenda from "./pages/Agenda";
import { BrowserRouter as Router } from "react-router-dom";

interface IErrorBoundaryState {
  error?: Error;
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      error: undefined
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error({ error, errorInfo });
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <h1>Error!</h1>;
    }

    return this.props.children;
  }
}

const App = () => (
  <div className="App">
    <header className="App-header">NDC Sydney Agenda</header>
    <Router>
      <ErrorBoundary>
        <Agenda />
      </ErrorBoundary>
    </Router>
  </div>
);

export default App;
