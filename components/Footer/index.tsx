import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-400">
      <div className="flex flex-col px-2 sm:px-6 lg:px-8 py-12 mx-auto max-w-6xl md:flex-row">
        <div className="md:flex-shrink-0 sm:w-80 mx-auto text-center">
          <a href="#">
            <img src="http://openinfo.umsa.bo/img/openinfo.jpeg" className="w-auto" alt="Logo" />
          </a>
          <p className="mt-2 text-sm">Feria virtual de tecnología</p>
          <div className="mt-2">
            <span className="inline-flex justify-center items-center">
              <a className="text-gray-500 cursor-pointer transform hover:text-blue-600 hover:scale-110 transition duration-150">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500 cursor-pointer transform hover:text-red-600 hover:scale-110 transition duration-150">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500 cursor-pointer transform hover:text-blue-400 hover:scale-110 transition duration-150">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-300 uppercase title-font">
              Sitio
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="cursor-pointer hover:text-gray-200">Inicio</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer hover:text-gray-200">Feria de Proyectos</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer hover:text-gray-200">Concurso</a>
              </li>
              <li className="mt-3">
                <a className="cursor-pointer hover:text-gray-200">Resultados</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-200 uppercase title-font">
              Dirección
            </h2>
            <p>Av. Villazón Nro 1995</p>
            <p>Monoblock Central - Segundo Patio</p>
            <p>Edif. Carrera de Informatica</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-gray-200 text-center">
            Copyright © 2020 Todos los Derechos Reservados
          </p>
          <p className="text-sm text-gray-200 text-center">Carrera de Informática - UMSA</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
