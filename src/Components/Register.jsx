import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../Firebase/Firebase.init';
import { toast } from 'react-toastify';

const Register = () => {
    const [user, setUser] = useState(false)
    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();

    const handleRegisterData = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;

                // Now update the user's profile
                updateUserProfile({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser({
                            ...createdUser, displayName: name,
                            photoURL: photo
                        });

                        navigate('/home');
                        toast.success('Registration successful!', {
                            autoClose: 4000,
                            pauseOnHover: true,
                            draggable: true,
                        });
                    })
                    .catch((error) => {
                        console.error('Profile update failed:', error);
                        toast.error("Profile update failed.");
                    });
            })
            .catch(error => {
                toast.error("Registration failed!", {
                    autoClose: 4000,
                    pauseOnHover: true,
                    draggable: true,
                });
                console.log('Create user error:', error);
            });
    };


    const handleGoogleSignIn = (auth, provider) => {
        googleSignIn(auth, provider)
            .then(result => {
                console.log(result)
                navigate('/home')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="min-h-[500px] py-15 flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-3">Register</h1>
                    <form onSubmit={handleRegisterData} className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                name="url"
                                required
                                placeholder="https://"
                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                title="Must be valid URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="mail@site.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {user && (
                                <p className="text-red-500 text-sm mt-1">
                                    A user already exists with this email.
                                </p>
                            )}
                        </div>
                        <div className='relative'>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                minLength={6}
                                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                placeholder="Password"
                                title="Password must be at least 6 characters long and include at least one uppercase and one lowercase letter"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </form>
                    <div className="divider py-3 text-sm">OR</div>
                    <div className='flex flex-col justify-center gap-4 mt-4 px-4'>
                        <div className='flex flex-col justify-center gap-4 mt-4 px-4'>
                            <button onClick={() => handleGoogleSignIn(auth, provider)} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Register with Google
                            </button>
                        </div>

                        <p className="text-center text-sm text-gray-600 mt-5">
                            Already have an account ?{' '}
                            <Link to="/login" className="text-blue-600 hover:underline">
                                login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;