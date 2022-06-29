// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// // DETALLES DEL USUARIO

// export function UserDetails() {
//   const { id } = useParams();
//   const [user, setUser] = useState();

//   useEffect(() => {
//     // fetch(`https://`)
//       .then((res) => res.json())
//       .then((data) => setUser(data.data));
//   }, [id]);

//   return (
//     <div>
//       {user ? (
//         <div key={user.id}>
//           <p>{user.email}</p>
//           <p>
//             {user.first_name} {user.last_name}
//           </p>
//           <img width={64} height={64} src={user.avatar} />
//           <Link to={`/users/${user.id}`}>Ver detalle</Link>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }
