import * as React from "react";

type HeaderProps = {
    headerName: string;
}

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <h1 style={{width: "100%"}} className="terminal-prompt">{this.props.headerName}</h1>
        );
    }
}

export default Header;