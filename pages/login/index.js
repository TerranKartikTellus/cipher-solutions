import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../utils/firebase'

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <div className='bg-gray-900 h-full relative text-gray-100 overflow-hidden flex flex-col items-center justify-center'>
      <img className='w-fullh-full pt-[90px] opacity-50 rounded-2xl ' src='/img1.png'></img>
      <form onSubmit={handleLogin} className='absolute top-40  left-0 w-full mx-auto tracking-wider flex flex-col items-center justify-center' >
          
          <div><img src="/ico.png" className="w-8 h-8"></img></div>
          <div className='mb-10 font-bold text-2xl text-white tracking-wider'>CipherSchools</div>
          
          <input className='w-3/12 bg-transparent p-3 text-xl outline-none border-[2px] border-orange-400 rounded-2xl mx-auto' placeholder='Email Address' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br></br>
          <input placeholder='Password' className='w-3/12 bg-transparent p-3 text-xl outline-none border-[2px] border-orange-400 rounded-2xl mx-auto' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <p className='my-3'>Don't have an account? <a href="#" onClick={handleRegister}>Register</a></p>
        <button type="submit" className='bg-orange-400 my-3 w-3/12 p-3'>Log in</button>
      </form>
    </div>
  );
};

export default Login;