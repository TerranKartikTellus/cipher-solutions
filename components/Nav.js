export default function Nav(){

  const data = [
    {
      main: "MyRWA", 
      sub: [
        {main: "Residents Directory"},
        {main: "Homes"},
        {main: "Elections", sub: [ {main: "Election Submission Form"},{main: "Election Dashboard"} ]},
      ]
    },
    {
      main: "Services", 
      sub: [
        {main: "Residents Directory"},
        {main: "Homes"},
        {main: "Elections", sub: [ {main: "Election Submission Form"},{main: "Election Dashboard"} ]},
      ]
    },{
      main: "Documents", 
      sub: [
        {main: "Residents Directory"},
        {main: "Homes"},
        {main: "Elections", sub: [ {main: "Election Submission Form"},{main: "Election Dashboard"} ]},
      ]
    },{
      main: "Initiatives", 
      sub: [
        {main: "Residents Directory"},
        {main: "Homes"},
        {main: "Elections", sub: [ {main: "Election Submission Form"},{main: "Election Dashboard"} ]},
      ]
    },{
      main: "About Us", 
      sub: [
        {main: "Residents Directory"},
        {main: "Homes"},
        {main: "Elections", sub: [ {main: "Election Submission Form"},{main: "Election Dashboard"} ]},
      ]
    }
  ];
  return(
    <div className="px-7 py-4 flex flex-row items-center justify-between fixed top-0 left-0 w-full">
      <div><img className="w-10 h-10" src="/n/logo.png"></img></div>
      <div className="flex flex-row items-center justify-evenly space-x-10">
        {data.map(i1=>(
          <div key={i1} className="group relative">
            <div className="hover:bg-gray-200 hover:text-green-600 p-2">{i1.main}</div>
            <div className=" group-hover:opacity-100 opacity-0 absolute top-14 w-48 left-0 border p-2 border-gray-800  ">
              <Sub sub={i1.sub}></Sub>
            </div>
          </div>
        ))}
      <div><svg className="w-8 h-8 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg> </div>
      </div>
    </div>
  );
}

function Sub({sub}){
  return(
    <div>
      {
        sub.map(i=>(
          <div key={i} className="hover:bg-gray-200 hover:text-green-600 font-semibold p-2 border-b">{i.main}</div>
        ))
      }
    </div>
  );
}