import * as React from "react";

type HeaderProps = {
    headerName: string;
}

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <header className="terminal-banner">
                <h1 className="terminal-prompt">{this.props.headerName}</h1>
            </header>
        );
    }
}

export default Header;