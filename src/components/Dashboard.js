// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Dashboard() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/projects');
//         setProjects(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>{project.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects'); // Correct URL
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('An error occurred while fetching projects.');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
