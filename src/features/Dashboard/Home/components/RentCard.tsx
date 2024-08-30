type RentCardProps = {
  percentage: number;
  totalRentalIncome: number;
};

export default function RentCard({ percentage, totalRentalIncome }: RentCardProps) {
  return (
    <div className="border shadow rounded-lg h-72 p-2 bg-white">
      <select className="mb-4">
        <option>Monthly</option>
        <option>Yearly</option>
      </select>
      <br />
      <span className="border-l ml-3 pl-1">Rent</span>
      <div className="relative flex items-center justify-center m-auto h-28 w-28">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{
            background: `conic-gradient(#3bd1f6 ${percentage}%, #e5e7eb ${percentage}% 100%)`,
            borderRadius: "50%",
            // clipPath: 'circle(50% at 50% 50%)',
          }}
        >
          <div className="absolute flex items-center justify-center h-24 w-24 bg-white rounded-[50%]">${totalRentalIncome}</div>
        </div>
      </div>
      <div className="mt-4 flex gap-2 ml-3 border">
        <div className="w-44 border">
          <div className="text-xs">
            <p>
              Last month: <span className={totalRentalIncome > 16109 ? "text-green-500" : "text-red-500"}>$16,109</span>
            </p>
          </div>
          <div className="text-xs">
            <p>
              Last Year: <span className={totalRentalIncome > 32156 ? "text-green-500" : "text-red-500"}>$32,156</span>
            </p>
          </div>
        </div>
        <div className="w-44 border">
          <div className="text-xs">
            <p>
              Last month: <span className={totalRentalIncome > 16109 ? "text-green-500" : "text-red-500"}>$16,109</span>
            </p>
          </div>
          <div className="text-xs">
            <p>
              Last Year: <span className={totalRentalIncome > 32156 ? "text-green-500" : "text-red-500"}>$32,156</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
