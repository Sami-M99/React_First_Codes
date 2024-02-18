function Menu({ title, message, children }) {
    return (
        <div style={{
            border: "2px solid #017476",
            textAlign: "center",
            width: "500px",
            marginBottom: "10px",
        }}>
            {/* Conditional Rendering */}
            {children  == null || children == "" ? <></> : <h2>{ children }</h2>}
            <h2>{ title }</h2>
            <p style={{
                borderTop: "1px solid #ccc",
                padding: "20px 0",
                margin: "0"
            }}>{message}</p>
        </div>
    )
}

export default Menu;