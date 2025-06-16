import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='fixed top-3 w-full z-50 text-black'>
      <div className='container mx-auto px-8  bg-[#D3E7F5] 
                      rounded-4xl shadow-xl'>
        <div className='flex justify-between items-center py-2'>
          <img src={logo} alt="Hackstreet Auction" className='h-9 w-auto
                            transition transform hover:scale-120 hover:-translate-y-1 duration-500' />
          <ul className='flex gap-4 lg:gap-24'>
            <li>
              <Link 
                to="overview"
                smooth={true}
                duration={1000}
                offset={-112}
                className="
                  inline-block
                  text-primary lg:px-5 py-2 rounded-2xl
                  transition transform hover:scale-110 duration-500
                  hover:bg-cyan-700 hover:text-white cursor-pointer
                "
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="users"
                smooth={true}
                duration={1000}
                offset={-112}
                className="
                  inline-block
                  text-primary lg:px-5 py-2 rounded-2xl
                  transition transform hover:scale-110 duration-500
                  hover:bg-cyan-700 hover:text-white cursor-pointer
                "
              >
                For you?
              </Link>
            </li>
            <li>
              <Link
                to="features"
                smooth={true}
                duration={1000}
                offset={-112}
                className="
                  inline-block
                  text-primary lg:px-5 py-2 rounded-2xl
                  transition transform hover:scale-110 duration-500
                  hover:bg-cyan-700 hover:text-white cursor-pointer
                "
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="demo"
                smooth={true}
                duration={1000}
                offset={-112}
                className="
                  inline-block
                  text-primary lg:px-5 py-2 rounded-2xl
                  transition transform hover:scale-110 duration-500
                  hover:bg-cyan-700 hover:text-white cursor-pointer
                "
              >
                Demo
              </Link>
            </li>
            <li>
              <Link
                to="postmortem"
                smooth={true}
                duration={1000}
                offset={-112}
                className="
                  inline-block
                  text-primary lg:px-5 py-2 rounded-2xl
                  transition transform hover:scale-110 duration-500
                  hover:bg-cyan-700 hover:text-white cursor-pointer
                "
              >
                Postmortem
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
