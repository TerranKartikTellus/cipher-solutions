import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth,firestore } from '../../utils/firebase';
import { useForm } from 'react-hook-form';

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);
const validatePassword = (value) => {
    if (value.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return true;
  };

  const onSubmit = async (data) => {
    
    setSubmitting(true);

    try {
      // create user account
      const { user } = await auth.createUserWithEmailAndPassword(data.email, data.password);
      // save user's first name and last name to Firestore
      console.log(1);
      await firestore.collection('users').doc(user.uid).set({
        firstName: data.firstName,
        lastName: data.lastName,
      });
      console.log(2);
      router.push('/');
    } catch (error) {
      console.error(error);
    }

    setSubmitting(false);
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className='bg-gray-900 h-full relative text-gray-100 overflow-hidden flex flex-col items-center justify-center'>
       <img className='w-fullh-full pt-[90px] opacity-50 rounded-2xl ' src='/img4.png'></img>
     
      <form onSubmit={handleSubmit(onSubmit)} className='absolute top-40  left-0 w-full mx-auto tracking-wider flex flex-col items-center justify-center' >
        <div><img src="/ico.png" className="w-8 h-8"></img></div>
          <div className='mb-10 font-bold text-2xl text-white tracking-wider'>CipherSchools</div>
          
       
        {/* <label> */}
          {/* First name: */}
          <input className='w-3/12 bg-transparent p-3 text-xl outline-none border-[2px] border-orange-400 rounded-2xl mx-auto' placeholder="First Name" type="text" {...register('firstName', { required: true })} />
        {/* </label> */}
        {errors.firstName && <span>This field is required</span>}
        <br />
        {/* <label> */}
          {/* Last name: */}
          <input className='w-3/12 bg-transparent p-3 text-xl outline-none border-[2px] border-orange-400 rounded-2xl mx-auto' placeholder="Last Name" type="text" {...register('lastName', { required: true })} />
        {/* </label> */}
        {errors.lastName && <span>This field is required</span>}
        <br />
        {/* <label> */}
          {/* Email: */}
          <input className='w-3/12 bg-transparent p-3 text-xl outline-none border-[2px] border-orange-400 rounded-2xl mx-auto' placeholder="Email Address" type="email" {...register('email', { required: true })} />
        {/* </label> */}
        {errors.email && <span>This field is required</span>}
        <br />
        {/* <label> */}
          {/* Password: */}
          <input className='w-3/12 bg-transparent p-3 text-xl outline-none border-[2px] border-orange-400 rounded-2xl mx-auto' placeholder="Password" type="password" {...register('password', { required: true ,validate: validatePassword })} />
        {/* </label> */}
        {errors.password && <span>This field is required</span>}
        <br />
      <p>Already have an account? <a href="#" onClick={handleLogin}>Log in</a></p>
        <button  type="submit" className={`${submitting ? 'bg-red-500':'bg-blue-400'} bg-orange-400 my-3 w-3/12 p-3`} disabled={submitting}>Register</button>
      </form>
    </div>
  );
};

export default Register;