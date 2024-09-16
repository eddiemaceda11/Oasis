type TabsProps = {
  currentTab: string | null;
  setCurrentTab: React.Dispatch<React.SetStateAction<string | null>>;
};

const Tabs = ({ currentTab, setCurrentTab }: TabsProps) => {
  return (
    <div className="border-b flex border-gray-300 mt-10 gap-2 h-10">
      <div
        className={currentTab === "All Orders" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
        onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
      >
        All Orders
      </div>
      <div
        className={currentTab === "Completed" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
        onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
      >
        Completed
      </div>
      <div
        className={currentTab === "In Progress" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
        onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
      >
        In Progress
      </div>
      <div
        className={currentTab === "Backlogged" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
        onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
      >
        Backlogged
      </div>
      <div
        className={currentTab === "Canceled" ? "border-b-2 border-blue-800 flex justify-center items-center w-24 cursor-pointer" : "border-b-2 border-transparent flex justify-center items-center w-24 cursor-pointer"}
        onClick={(e) => setCurrentTab(e.currentTarget.textContent)}
      >
        Canceled
      </div>
    </div>
  );
};

export default Tabs;
