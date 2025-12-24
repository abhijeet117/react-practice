import Btmicon from "./components/Btm-icon";
import Prefences from "./components/prefences";
const people = [
  {
    id: 1,
    name: "Neel Litoriya",
    role: "Photographer",
    location: "Indore, India",
    bannerImage:
      "https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",
    stats: { views: 624, followers: 142, likes: 104 },
  },
  {
    id: 2,
    name: "Aarav Mehta",
    role: "UI Designer",
    location: "Mumbai, India",
    bannerImage:
      "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 812, followers: 210, likes: 189 },
  },
  {
    id: 3,
    name: "Riya Sharma",
    role: "Fashion Model",
    location: "Delhi, India",
    bannerImage:
      "https://plus.unsplash.com/premium_photo-1706026420430-717b8e2fda72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1706026420430-717b8e2fda72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 1024, followers: 398, likes: 356 },
  },
  {
    id: 4,
    name: "Kabir Singh",
    role: "Content Creator",
    location: "Chandigarh, India",
    bannerImage:
      "https://images.unsplash.com/photo-1723211945446-afc7718df136?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1723211945446-afc7718df136?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 540, followers: 120, likes: 98 },
  },
  {
    id: 5,
    name: "Simran Kaur",
    role: "Stylist",
    location: "Amritsar, India",
    bannerImage:
      "https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 930, followers: 275, likes: 240 },
  },
  {
    id: 6,
    name: "Rahul Verma",
    role: "Developer",
    location: "Bangalore, India",
    bannerImage:
      "https://images.unsplash.com/photo-1656771793175-ba3fce94106a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1656771793175-ba3fce94106a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 760, followers: 188, likes: 160 },
  },
  {
    id: 7,
    name: "Ananya Gupta",
    role: "Influencer",
    location: "Jaipur, India",
    bannerImage:
      "https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",
    stats: { views: 1150, followers: 420, likes: 399 },
  },
  {
    id: 8,
    name: "Dev Patel",
    role: "Cinematographer",
    location: "Ahmedabad, India",
    bannerImage:
      "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 680, followers: 155, likes: 130 },
  },
];

const App = () => {
  return (
    <div className=" p-4 flex gap-4 flex-wrap">
      <div className="h-120 w-75 border border-gray-500  bg-light-900">
        <div className="h-3/5 w-full ">
          <img
            src="https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww"
            alt=""
            className="bg-cover h-full w-full md:object-cover relative"
          />
        </div>

        <div className="h-2/5 w-full bg-white text-black">
          <div className="h-20 w-20 absolute top-65 ml-4">
            <img
              className="h-full w-full md:object-cover rounded-full "
              src="https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="absolute top-87 ml-3 w-70">
            <h1 className="text-2xl">Neel Litoriya</h1>

            <div className=" flex w-full justify-between items-center gap-4 mt-2">
              <div className="flex flex-col">

                <Prefences icon={<i class="ri-information-line"></i>} iName= {'Photographer'}/>
                <Prefences icon={<i class="ri-map-pin-line"></i>} iName= {'Indore, India'}/>

              </div>

              <div className="">
                <button className="text-white px-6 py-2 bg-black rounded-xl">
                  + Add
                </button>
              </div>
            </div>
            <div className="flex justify-around mt-2">

              <Btmicon icon={<i className="ri-eye-line"></i>} iName={'views'} count={624}/>
              <Btmicon icon={<i class="ri-user-follow-line"></i>} iName={'Followers'} count={125}/>
              <Btmicon icon={<i class="ri-heart-line"></i>} iName={'Like'} count={104}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
