import { useParams, useNavigate, Link } from 'react-router-dom';


const Projects = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  return (
    <div>
        <p>{id}</p>
    </div>
  )
}

export default Projects