import Img404 from '../assets/404-01.png';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center flex-col box-border h-screen p-6 lg:p-32 m-0 text-center">
      <img src={Img404} alt="image403" className="w-full lg:w-1/2 mb-6" />
      <div>
        <h4 className="text-2xl font-bold mb-2">Error 404: Page not found</h4>
        <p className="text-gray-500 font-medium mb-4">
          Sorry the page you requested was not found :(
        </p>
        <a
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer' }}
          className="underline text-blue-800"
        >
          Go back
        </a>
      </div>
    </main>
  );
}

export default NotFound;
