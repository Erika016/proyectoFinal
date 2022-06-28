import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch("https://")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <p>{user.email}</p>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <img width={64} height={64} src={user.avatar} />
            <Link to={`/users/${user.id}`}>Ver detalle</Link>
          </li>
        );
      })}
    </div>
  );
}