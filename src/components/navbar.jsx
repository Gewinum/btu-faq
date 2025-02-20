export default function Navbar({sections}) {
    return (
        <nav className={"terminal-toc"}>
            <ul>
                {Object.entries(sections).map(([identifier, prettyName]) => (
                    <li key={identifier} style={{fontSize: "20px"}}>
                        <a href={`#${identifier}`}>{prettyName}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}