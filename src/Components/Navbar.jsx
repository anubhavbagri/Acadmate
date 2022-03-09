import React from 'react';
import { Fragment } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const auth = getAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <nav className="bg-transparent fixed w-full z-10 md:px-4 md:py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <a className="flex">
          <span className="self-center text-xl font-bold whitespace-nowrap">
            Acadmate
          </span>
        </a>
        <div className="flex items-center md:order-2">
          <div className="relative inline-block text-left">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-gray-700 focus:outline-none ">
                  {auth.currentUser.displayName}
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-6 w-6"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none ">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => navigate('/profile')}
                          style={{ cursor: 'pointer' }}
                          className={classNames(
                            active
                              ? 'bg-gray-200 text-gray-900'
                              : 'text-black-900',
                            'block px-4 py-2 text-base'
                          )}
                        >
                          My Profile
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => navigate('/upload')}
                          style={{ cursor: 'pointer' }}
                          className={classNames(
                            active
                              ? 'bg-gray-200 text-gray-900'
                              : 'text-gray-900',
                            'block px-4 py-2 text-base'
                          )}
                        >
                          Upload Material
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => navigate('/download')}
                          style={{ cursor: 'pointer' }}
                          className={classNames(
                            active
                              ? 'bg-gray-200 text-gray-900'
                              : 'text-gray-900',
                            'block px-4 py-2 text-base'
                          )}
                        >
                          Download Material
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={onLogout}
                          style={{ cursor: 'pointer' }}
                          className={classNames(
                            active
                              ? 'bg-gray-200 text-red-500'
                              : 'text-red-500',
                            'block px-4 py-2 text-base font-semibold'
                          )}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
