import Sidelink from "./Sidelink";

const Sidebar = () => {
  return (
    <div className="p-4 w-[20%] h-[100%]">
      <div className="h-full border-2 border-purple-400 rounded-xl bg-[#252236]">
        <div className="flex p-3 gap-2 items-center justify-between">
          <div className="flex gap-2">
            <i class="ri-tv-line text-purple-500 text-2xl"></i>
            <h1 className="text-2xl font-bold">Dremeeo</h1>
          </div>

          <div className="">
            <i class="ri-text-wrap text-2xl"></i>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-6">
          <Sidelink
            icon={<i class="ri-home-4-fill text-purple-600"></i>}
            iName={"Home"}
          />

          <Sidelink
            icon={<i class="ri-compass-discover-line "></i>}
            iName={"Explore"}
          />

          <Sidelink
            icon={<i class="ri-database-2-line "></i>}
            iName={"Genres"}
          />

          <Sidelink
            icon={<i class="ri-bookmark-line "></i>}
            iName={"Favourite"}
          />
        </div>

        <div className="w-[90%] ml-3 opacity-70">
          <hr />
        </div>

        <div className="p-4 flex flex-col gap-6">
          <Sidelink
            icon={<i class="ri-play-large-line"></i>}
            iName={"Continue Watching"}
          />

          <Sidelink
            icon={<i class="ri-timer-2-line"></i>}
            iName={"Recently Added"}
          />

          <Sidelink
            icon={<i class="ri-folder-4-line"></i>}
            iName={"My Collection"}
          />

          <Sidelink
            icon={<i class="ri-download-2-line"></i>}
            iName={"Downloads"}
          />
        </div>

        <div className="w-[90%] ml-3 opacity-70">
          <hr />
        </div>

        <div className="p-4 flex flex-col gap-6 h-60 justify-between">
          <Sidelink
            icon={<i class="ri-settings-2-line opacity-100"></i>}
            iName={"Settings"}
          />

          <Sidelink
            icon={<i class="ri-logout-circle-r-line"></i>}
            iName={"Logout"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
