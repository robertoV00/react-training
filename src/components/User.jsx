function User(id, name, username) {
    return (
        <div>
            {/* //map through the data */}
            {users.map((user) => (
                <div key={id} style={{ border: "1px solid red", margin: "8px 0" }}>
                    <div>{name}</div>
                    <div>{username}</div>
                    <div>{id}</div>
                </div>
            ))}
        </div>
    )
}

export default User;