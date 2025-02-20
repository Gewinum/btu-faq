function Header({headerName}) {
    return (
        <header className="terminal-banner">
            <h1 className="terminal-prompt">{headerName}</h1>
        </header>
    );
}

export default Header;