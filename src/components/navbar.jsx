export default function Navbar({sections}) {
    return (
        <nav>
            <ul>
                {Object.entries(sections).map(([identifier, prettyName]) => (
                    <li key={identifier} style={{fontSize: "20px"}}>
                        <a href={`#${prettyName}`}>{prettyName}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}