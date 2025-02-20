import * as React from "react";

type NavbarProps = {
    sections: {[key: string]: string};
}

class Navbar extends React.Component<NavbarProps> {
    render() {
        return (
            <nav className={"terminal-toc"}>
                <ul>
                    {Object.entries(this.props.sections).map(([identifier, prettyName]) => (
                        <li key={identifier} style={{fontSize: "20px"}}>
                            <a href={`#${identifier}`}>{prettyName}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Navbar;