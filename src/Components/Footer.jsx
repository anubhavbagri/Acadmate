import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Bottom area */}
        <div className="container flex flex-col items-center px-8 py-6 mx-auto max-w-7xl sm:flex-row md:justify-between justify-center border-t border-gray-200">
          <div className="flex flex-col md:flex-row">
            <p className="text-xl text-center font-extrabold leading-none text-gray-900 select-none logo">
              Acadmate<span className="text-blue-600">.</span>
            </p>
            <p className="mt-4 text-sm text-center text-gray-500 font-medium sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
              © 2022 Acadmate - Only for MUJ.{' '}
            </p>
          </div>
          <span className="inline-flex justify-center mt-4 space-x-5 text-sm sm:justify-start text-gray-500 sm:ml-4 sm:pl-4 sm:mt-0">
            Made with &#10084; by&nbsp;
            <a target="_blank" href="https://www.linkedin.com/in/anubhavbagri/">
              Anubhav
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
