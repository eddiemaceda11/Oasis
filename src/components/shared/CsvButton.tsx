type CsvButtonProps = {
  file: string;
  data: [];
};

const tempData = [
  { field1: "Eddie", field2: "Maceda", field3: "eddiemaceda" },
  { field1: "Bob", field2: "Dylan", field3: "bobdylan" },
];

const tempFilename = "myData.csv";

const CsvButton = () => {
  const downloadCSV = () => {
    // Convert the data array into a csv string
    const csvString = [
      ["First Name", "Last Name", "Username"], // Specify your headers here
      ...tempData.map((item) => [item.field1, item.field2, item.field3]), // Map your data fields accordingly
    ]
      .map((row) => row.join(","))
      .join("\n");

    // Create a Blob from the CSV string
    const blob = new Blob([csvString], { type: "text/csv" });

    // Generate a download link and initiate the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = tempFilename || "download.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={downloadCSV}
      className="border border-gray-300 h-10 px-4 text-gray-500 text-sm bg-white rounded"
    >
      <i className="fa-solid fa-file-arrow-down pr-2"></i>Exports
    </button>
  );
};

export default CsvButton;
