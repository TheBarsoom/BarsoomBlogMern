import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const Navbar = () => {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const activeStyles = {
        color: 'white',
    }

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('you are out of system')
    }
    return (
        <div className='flex py-4 justify-between items-center'>
            <NavLink    to={'/'} className='flex rounded-2xl justify-center items-center w-6 h-6 bg-orange-600 text-xs text-white  hover:scale-125' >
                Barsoom
            </NavLink>

            {isAuth && (
                <ul className='flex gap-8'>
                    <li>
                        <NavLink
                            to={'/'}
                            href='/'
                            className='text-xs text-gray-400 hover:text-white'
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/posts'}
                            href='/'
                            className='text-xs text-gray-400 hover:text-white'
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >
                            My Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/new'}
                            href='/'
                            className='text-xs text-gray-400 hover:text-white'
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >
                           Add Post
                        </NavLink>
                    </li>
                </ul>
            )}

            <div className='flex justify-center items-center text-white rounded-sm px-4 py-2'>
                {isAuth ? (
                     <button className='bg-gray-600 text-xs p-2 rounded-md' onClick={logoutHandler}>Logout</button>
                ) : (
                  <div className='flex justify-center items-center gap-5'>
                      <Link to={'/login'} className=' bg-gray-600 text-xs p-2 rounded-md'> Login </Link>
                    <Link to={'/register'} className=' bg-gray-600 text-xs p-2 rounded-md'> Register </Link>
                  </div>
                    
                )}
            </div>
        </div>
    )
}


export default Navbar