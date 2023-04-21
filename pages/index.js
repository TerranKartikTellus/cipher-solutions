import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../utils/firebase'
import Image_slider from '@/components/image-slider';

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
     

           if (user) {
       setUser(user);
     } else {
       router.push('/login');
     }
   });

   return unsubscribe;
 }, []);

 const handleLogout = async () => {
   try {
     await auth.signOut();
     router.push('/login');
   } catch (error) {
     console.error(error);
   }
 };

 return (
   <div className='bg-black/90 h-full text-gray-100 p-5'>
      <div className='h-[500px]'>
        <Image_slider></Image_slider>
      </div>
     <p className='mt-28'>Welcome {user && user.email}!</p>
     <button onClick={handleLogout}>Log out</button>
   </div>
 );
 };

export default Index;