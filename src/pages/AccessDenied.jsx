import Img403 from '../assets/403-01.png';

function AccessDenied() {
  return (
    <main className="flex items-center justify-center flex-col box-border h-screen p-6 lg:p-32 m-0 text-center">
      <img src={Img403} alt="image403" className="w-full lg:w-1/2 mb-6" />
      <div>
        <h4 className="text-2xl font-bold mb-2">Error 403: Access Denied</h4>
        <p className="text-gray-500 font-medium mb-4">
          You do not have permission to view this page. <br /> Please Login to
          your university microsoft account to use this webapp
        </p>
        <a href="./" className="underline text-blue-800">
          Go back to home
        </a>
      </div>
    </main>
  );
}

export default AccessDenied;
