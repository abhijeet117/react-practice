import Btmicon from "./components/Btm-icon";
import Prefences from "./components/prefences";
import Users from "./components/Users";

const App = () => {
  return (
    <div className=" p-4 flex flex-row gap-4 flex-wrap ">

      {Users.map((person) =>

       
      
      <div className="h-120 w-75  bg-light-900 rounded-20 relative">
        
        <div className="h-3/5 w-full ">
          <img
            src={person.bannerImage}
            className="bg-cover h-full w-full object-cover"
          />
        </div>

        <div className="h-2/5 w-full bg-white text-black">
          <div className="h-20 w-20 absolute top-60 ml-4">
            <img
              className="h-full w-full object-cover rounded-full "
              src={person.profileImage}
              alt=""
            />
          </div>

          <div className="absolute top-80 ml-3 w-70">
            <h1 className="text-2xl">{person.name}</h1>

            <div className=" flex w-full justify-between items-center gap-4 mt-2">
              <div className="flex flex-col">
                
                
                

                <Prefences icon={<i class="ri-information-line"></i>} iName= {person.role}/>
                <Prefences icon={<i class="ri-map-pin-line"></i>} iName= {person.location}/> 

                
        
              </div>

              <div className="">
                <button className="text-white px-6 py-2 bg-black rounded-xl">
                  + Add
                </button>
              </div>
            </div>
            <div className="flex justify-around mt-2">

              <Btmicon icon={<i className="ri-eye-line"></i>} iName={'views'} count={person.stats.views}/>
              <Btmicon icon={<i class="ri-user-follow-line"></i>} iName={'Followers'} count={person.stats.followers}/>
              <Btmicon icon={<i class="ri-heart-line"></i>} iName={'Like'} count={person.stats.likes}/>

            </div>
          </div>
        </div>
      </div>

      )}
    </div>
  );
};

export default App;
