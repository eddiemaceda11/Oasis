import CsvButton from "@/components/shared/CsvButton";

const Controls = () => {
  return (
    <div className="mt-8 h-16 flex items-center">
      <div className="relative">
        <i className="fa-solid fa-magnifying-glass absolute top-[7px] left-4 text-gray-400 text-lg"></i>
        <input
          className="border border-gray-300 h-10 w-[45rem] rounded pl-11 placeholder:text-gray-400 text-sm"
          placeholder="Search for an order ID, customer, or product"
        ></input>
      </div>
      <div className="flex ml-auto gap-2">
        <button className="border border-gray-300 h-10 px-4 text-gray-500 text-sm bg-white rounded">
          <i className="fa-solid fa-filter pr-2"></i>Filters
        </button>
        <button className="border border-gray-300 h-10 px-4 text-gray-500 text-sm bg-white rounded">
          <i className="fa-solid fa-paperclip pr-2"></i>Attachments
        </button>
        <CsvButton />
      </div>
    </div>
  );
};

export default Controls;
