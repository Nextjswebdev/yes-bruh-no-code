import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} YesBruhNoCode. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mx-2">
              <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.827.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.924 4.924 0 00-8.39 4.482 13.978 13.978 0 01-10.15-5.15 4.924 4.924 0 001.523 6.573 4.9 4.9 0 01-2.23-.616v.062a4.922 4.922 0 003.95 4.827 4.905 4.905 0 01-2.224.084 4.923 4.923 0 004.6 3.417 9.873 9.873 0 01-6.102 2.102c-.396 0-.787-.023-1.175-.069a13.944 13.944 0 007.548 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.213-.004-.426-.014-.637A9.935 9.935 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mx-2">
              <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.81v-9.294H9.692v-3.622h3.118V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.766v2.313h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mx-2">
              <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.771C.792 0 0 .771 0 1.771v20.458C0 23.229.792 24 1.771 24H22.23C23.209 24 24 23.229 24 22.229V1.771C24 .771 23.209 0 22.23 0zM7.125 20.452H3.56V9.548h3.565v10.904zM5.342 8.183c-1.144 0-2.073-.928-2.073-2.072s.929-2.072 2.073-2.072c1.145 0 2.073.928 2.073 2.072s-.929 2.072-2.073 2.072zM20.452 20.452h-3.565v-5.569c0-1.326-.025-3.033-1.85-3.033-1.852 0-2.135 1.445-2.135 2.941v5.661H9.339V9.548h3.419v1.486h.049c.476-.9 1.637-1.85 3.367-1.85 3.601 0 4.266 2.369 4.266 5.451v5.816z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
