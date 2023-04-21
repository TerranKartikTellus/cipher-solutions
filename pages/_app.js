import '@/styles/globals.css'
import Link from 'next/link';

export default function App({ Component, pageProps }) {


  return <main className="bg-gray-900  text-gray-900 min-h-screen w-full  ">
    <div className='bg-gray-800 fixed top-0 left-0 w-full h-[60px] p-3 border-b-2 border-gray-600'><Nav></Nav></div>
    <div className=' pt-[60px] flex flex-row items-start justify-start h-screen'>
      <div className=' bg-gray-800 text-gray-100 py-4 px-1 h-full bg-blue-200 w-[60px] border-r-2 border-gray-600'><SideNav></SideNav></div>
      <div className='h-full bg-blue-100 w-full'>
        <Component {...pageProps} />
      </div>
    </div>
    
     
    </main>
}

function Nav(){

  return(
    <div className='flex flex-row items-center justify-between border-b-1 border-gray-200'>
     
     <div className='flex flex-row items-center justify-center space-x-6'>
      <div className=''><svg className='w-8 h-8  fill-white' width="21" height="15" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 18.3333C0 19.2538 0.746191 20 1.66667 20H12.3333C13.2538 20 14 19.2538 14 18.3333C14 17.4129 13.2538 16.6667 12.3333 16.6667H1.66667C0.746191 16.6667 0 17.4129 0 18.3333ZM0 10C0 10.9205 0.746191 11.6667 1.66667 11.6667H26.3333C27.2538 11.6667 28 10.9205 28 10C28 9.07952 27.2538 8.33333 26.3333 8.33333H1.66667C0.746193 8.33333 0 9.07952 0 10ZM0 1.66667C0 2.58714 0.746191 3.33333 1.66667 3.33333H26.3333C27.2538 3.33333 28 2.58714 28 1.66667C28 0.746192 27.2538 0 26.3333 0L1.66667 0C0.746193 0 0 0.746192 0 1.66667Z" fill="var(--text-color)"  ></path></svg></div>
      <div><img src="/ico.png" className="w-8 h-8"></img></div>
      <div className='font-bold text-2xl text-white tracking-wider'>CipherSchools</div>
      <div className='flex flex-row items-center justify-center space-x-2'>
          <div><svg className="fill-white/90 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.791 11.438l-1.613 4.014 3.112-2.885 1.586-3.957-3.085 2.828zm.835 1.094c-.289.043-.559-.157-.601-.446-.043-.289.157-.558.447-.6.29-.042.56.157.603.446s-.159.558-.449.6zm-2.199-6.892c0-.353.371-.64.828-.64.456 0 .828.288.828.64 0 .138-.057.266-.153.371l-.143-.208.054-.163c0-.216-.269-.399-.586-.399s-.586.183-.586.399c0 .134.103.255.256.328l-.053.24c-.265-.107-.445-.322-.445-.568zm.546 7.154l-2.082-.027 1.912-.905c.017-.23.077-.448.175-.646l-.886-.915 1.193.478c.132-.137.286-.252.456-.34l.111-2.071.859 1.881-.293.27c-.926.076-1.559.988-1.288 1.881l-.157.394zm1.568-6.668c-.239 0-.476.014-.707.042-.088-.232-.269-.442-.51-.388-.244.054-.308.318-.304.542-2.553.669-4.438 2.986-4.438 5.741 0 3.279 2.668 5.937 5.959 5.937s5.959-2.658 5.959-5.937c0-3.279-2.668-5.937-5.959-5.937zm1.294 10.614l-.396-.584-.1.692c-2.612.428-4.997-1.275-5.548-3.712l.529-.337-.612-.159c-.301-2.542 1.391-4.748 3.697-5.294l.325.507.119-.59c2.514-.354 4.763 1.243 5.386 3.515l-.513.402.615.055c.438 2.543-1.171 4.869-3.502 5.505zm2.26-5.432l-1.823.872c-.021.172-.065.336-.132.489l.924.946-1.215-.49c-.14.158-.308.291-.496.391l-.048 2.104-.905-1.882.326-.302c.884-.111 1.478-.986 1.231-1.852l.146-.365 1.992.089z"/></svg></div>
          <h1 className='font- text-sm text-white tracking-wider'>Browse</h1>
      </div>
     </div>

      <div className="flex flex-row space-x-4 items-center justify-center">
        <div className='relative'>
          <svg className="w-5 h-5 fill-white/80 absolute top-1 left-2" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg>
          <input placeholder='Search and Learn' className="bg-gray-700 rounded-l-full rounded-r-full h-[30px] w-[300px] outline-none focus:border-[1px] border-gray-500   pl-10 text-gray-100"></input></div>
        <div><svg className="w-8 h-8 pt-1 fill-white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M1 20v-2.946c1.993-.656 2.575-2.158 3.668-6.077.897-3.218 1.891-6.784 4.873-8.023-.027-.147-.041-.299-.041-.454 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .156-.014.309-.042.458 2.987 1.244 3.984 4.813 4.884 8.033 1.103 3.95 1.697 5.423 3.658 6.062v2.947h-7c0 2.208-1.792 4-4 4s-4-1.792-4-4h-7zm14 0h-6c0 1.656 1.344 3 3 3s3-1.344 3-3zm-13-1h20v-1.241c-2.062-.918-2.82-3.633-3.621-6.498-1.066-3.814-2.167-7.758-6.379-7.761-4.21 0-5.308 3.937-6.369 7.745-.8 2.872-1.559 5.593-3.631 6.514v1.241zm11.492-16.345l.008-.155c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5l.008.152c.455-.099.949-.152 1.487-.152.542 0 1.039.054 1.497.155z"/></svg></div>
        <div><svg className="w-8 h-8 pt-1  fill-white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z"/></svg></div>
        <div className='text-center space-x-2 flex flex-row items-center justify-center text-xl font-semibold text-orange-400'><img src="/not1.svg" className='w-8 h-8 '></img> <h2>0</h2> </div>
      </div>
    </div>
  )
}

function SideNav(){

  return(
    <div className='text-xs text-center tracking-wider font-normal '>
      <Link href="/login" c>
        <svg width="24" className='mx-auto w-8 h-8 fill-gray-100' height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 22h-20v-7h2v5h16v-16h-16v5h-2v-7h20v20zm-13-11v-4l6 5-6 5v-4h-11v-2h11z"/></svg>
        <p >Sign In</p>
      </Link>
    </div>
  );
}