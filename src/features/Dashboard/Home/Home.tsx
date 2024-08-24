type RentalProps = {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  rentPrice: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  available: boolean;
  underMaint: boolean;
};

const rentalProperties: RentalProps[] = [
  {
    id: 1,
    address: "123 Maple Street",
    city: "Springfield",
    state: "IL",
    zip: "62704",
    rentPrice: 1200,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1500,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 2,
    address: "456 Oak Avenue",
    city: "Austin",
    state: "TX",
    zip: "73301",
    rentPrice: 1400,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1800,
    available: false,
    underMaint: false,
  },
  {
    id: 3,
    address: "789 Pine Road",
    city: "Seattle",
    state: "WA",
    zip: "98101",
    rentPrice: 1000,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1200,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 4,
    address: "101 Birch Lane",
    city: "Miami",
    state: "FL",
    zip: "33101",
    rentPrice: 1600,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2000,
    available: false,
    underMaint: false,
  },
  {
    id: 5,
    address: "202 Cedar Boulevard",
    city: "New York",
    state: "NY",
    zip: "10001",
    rentPrice: 1100,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 6,
    address: "303 Elm Street",
    city: "Chicago",
    state: "IL",
    zip: "60601",
    rentPrice: 1300,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1600,
    available: false,
    underMaint: false,
  },
  {
    id: 7,
    address: "404 Willow Drive",
    city: "San Francisco",
    state: "CA",
    zip: "94101",
    rentPrice: 1150,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1250,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 8,
    address: "505 Aspen Way",
    city: "Denver",
    state: "CO",
    zip: "80201",
    rentPrice: 1350,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1550,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 9,
    address: "606 Sycamore Street",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    rentPrice: 1250,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    available: false,
    underMaint: false,
  },
  {
    id: 10,
    address: "707 Fir Avenue",
    city: "Boston",
    state: "MA",
    zip: "02101",
    rentPrice: 1450,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1700,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 11,
    address: "808 Redwood Road",
    city: "Philadelphia",
    state: "PA",
    zip: "19101",
    rentPrice: 1250,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1500,
    available: false,
    underMaint: false,
  },
  {
    id: 12,
    address: "909 Hemlock Drive",
    city: "Washington",
    state: "DC",
    zip: "20001",
    rentPrice: 1550,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1900,
    available: false,
    underMaint: false,
  },
  {
    id: 13,
    address: "1010 Sequoia Lane",
    city: "Atlanta",
    state: "GA",
    zip: "30301",
    rentPrice: 1400,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1800,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 14,
    address: "1111 Poplar Avenue",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    rentPrice: 1050,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1150,
    available: false,
    underMaint: false,
  },
  {
    id: 15,
    address: "1212 Magnolia Street",
    city: "San Diego",
    state: "CA",
    zip: "92101",
    rentPrice: 1300,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1450,
    available: false,
    underMaint: false,
  },
  {
    id: 16,
    address: "1313 Spruce Avenue",
    city: "Seattle",
    state: "WA",
    zip: "98102",
    rentPrice: 1250,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1300,
    available: false,
    underMaint: false,
  },
  {
    id: 17,
    address: "1414 Cedar Lane",
    city: "Minneapolis",
    state: "MN",
    zip: "55401",
    rentPrice: 1450,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1750,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 18,
    address: "1515 Oak Court",
    city: "Miami",
    state: "FL",
    zip: "33102",
    rentPrice: 1550,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1900,
    available: false,
    underMaint: false,
  },
  {
    id: 19,
    address: "1616 Maple Road",
    city: "Phoenix",
    state: "AZ",
    zip: "85001",
    rentPrice: 1200,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1600,
    available: false,
    underMaint: false,
  },
  {
    id: 20,
    address: "1717 Pine Street",
    city: "San Jose",
    state: "CA",
    zip: "95101",
    rentPrice: 1350,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1500,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 21,
    address: "1818 Elm Drive",
    city: "Austin",
    state: "TX",
    zip: "73302",
    rentPrice: 1400,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1700,
    available: false,
    underMaint: false,
  },
  {
    id: 22,
    address: "1919 Willow Lane",
    city: "Indianapolis",
    state: "IN",
    zip: "46201",
    rentPrice: 1150,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1250,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 23,
    address: "2020 Birch Avenue",
    city: "Columbus",
    state: "OH",
    zip: "43201",
    rentPrice: 1250,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 24,
    address: "2121 Redwood Street",
    city: "Cleveland",
    state: "OH",
    zip: "44101",
    rentPrice: 1300,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1450,
    available: false,
    underMaint: false,
  },
  {
    id: 25,
    address: "2222 Cedar Avenue",
    city: "Kansas City",
    state: "MO",
    zip: "64101",
    rentPrice: 1050,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1150,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 26,
    address: "2323 Spruce Drive",
    city: "Omaha",
    state: "NE",
    zip: "68101",
    rentPrice: 1200,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1500,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 27,
    address: "2424 Pine Avenue",
    city: "Sacramento",
    state: "CA",
    zip: "95801",
    rentPrice: 1250,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1600,
    available: false,
    underMaint: false,
  },
  {
    id: 28,
    address: "2525 Oak Street",
    city: "Tucson",
    state: "AZ",
    zip: "85701",
    rentPrice: 1100,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    available: true,
    underMaint: Math.random() < 0.5,
  },
  {
    id: 29,
    address: "2626 Maple Lane",
    city: "Raleigh",
    state: "NC",
    zip: "27601",
    rentPrice: 1350,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1550,
    available: false,
    underMaint: false,
  },
  {
    id: 30,
    address: "2727 Elm Street",
    city: "Nashville",
    state: "TN",
    zip: "37201",
    rentPrice: 1450,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1700,
    available: false,
    underMaint: false,
  },
];

const DashboardHome = () => {
  /* RENT */
  // Get the total amount of possible rent from all properties
  const totalRentalAmount = rentalProperties.reduce((acc, curr) => acc + curr.rentPrice, 0);
  // Get the income of the current properties tenants are renting
  const totalRentalIncome = rentalProperties.reduce((acc, curr) => {
    if (curr.available === false) {
      return acc + curr.rentPrice;
    }
    return acc;
  }, 0);

  //In this syntax, top val is the smaller val and bottom val is the bigger val
  const percentage = (totalRentalIncome / totalRentalAmount) * 100;

  /* PROPERTIES */
  const properties = rentalProperties.length;

  const propertiesRented = rentalProperties.reduce((acc, curr) => {
    if (curr.available === false) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const propertiesUnderMaintenence = rentalProperties.reduce((acc, curr) => {
    if (curr.underMaint === true) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const propertyPercentage = (propertiesRented / properties) * 100;
  const maintPercentage = (propertiesUnderMaintenence / properties) * 100;

  return (
    <div className="h-full w-[100%] bg-[#f3f3f3] overflow-hidden">
      <div className="pt-3 w-[74.3rem] m-auto p-4 ">
        <h1 className="text-[2rem] font-medium mb-4">Home</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 m-3">
          <div className="border shadow rounded h-72 p-2 bg-white">
            <select className="mb-4">
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <br />
            <span className="border-l ml-3 pl-1">Rent</span>
            <div className="relative flex items-center justify-center ml-12 h-24 w-24">
              <div
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(#3bd1f6 ${percentage}%, #e5e7eb ${percentage}% 100%)`,
                  borderRadius: "50%",
                  // clipPath: 'circle(50% at 50% 50%)',
                }}
              >
                <div className="absolute flex items-center justify-center h-20 w-20 bg-white rounded-[50%]">${totalRentalIncome}</div>
              </div>
            </div>
          </div>
          <div className="border shadow bg-white rounded h-72 md:col-span-2 p-2">
            <select className="mb-4">
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <br />
            <span className="border-l ml-3 pl-1 ">Properties</span>
            <div className="relative flex items-center justify-center ml-12 h-24 w-24">
              <div
                className="absolute w-full h-full flex items-center justify-center "
                style={{
                  background: `conic-gradient(#3bd1f6 ${propertyPercentage}%, #FFBF00 ${propertyPercentage}% ${100 - maintPercentage}%, #e5e7eb ${100 - maintPercentage}% 100%)`,
                  borderRadius: "50%",
                  // clipPath: 'circle(50% at 50% 50%)',
                }}
              >
                <div className="absolute flex items-center justify-center h-[48px] w-[48px] bg-white rounded-[50%]">{propertiesRented}</div>
              </div>
            </div>
            <div className="mt-2 ml-4 h-20 w-24">
              <div className=" h-6 flex items-center">
                <div className="h-3 w-3 bg-[#3bd1f6]"></div>
                <p className="text-xs ml-2 pb-[1.5px]">Rented</p>
              </div>
              <div className=" h-6 flex items-center">
                <div className="h-3 w-3 bg-[#e5e7eb]"></div>
                <p className="text-xs ml-2 pb-[1.5px]">Available</p>
              </div>
              <div className=" h-6 flex items-center">
                <div className="h-3 w-3 bg-[#FFBF00]"></div>
                <p className="text-xs ml-2 pb-[1.5px]">Maintenance</p>
              </div>
            </div>
          </div>
          <div className="border shadow rounded h-32 p-2">Card</div>
          <div className="border shadow rounded h-32 p-2 md:col-span-2">Card</div>
          <div className="border shadow rounded h-32 p-2">Card</div>
          <div className="border shadow rounded h-32 p-2">Card</div>
          <div className="border shadow rounded h-32 p-2">Card</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
