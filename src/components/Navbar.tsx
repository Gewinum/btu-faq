import * as React from "react";
import {Section} from "../assets/data.tsx";

type NavbarProps = {
    sections: Array<Section>
}

class Navbar extends React.Component<NavbarProps> {
    render() {
        return (
            <nav className="terminal-menu">
                <ul>
                    {this.props.sections.map((section) => (
                        <li key={section.name} style={{fontSize: "20px"}}>
                            <a href={`#${section.name}`}>{section.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Navbar;