import { PackArray, filterObjects, findOneItem, findOneObj } from "../utils/fetchApi";

const Practice1 = () => {
  let fruits_details = [
    {
      fruit_name: "Apple",
      fruit_color: "Red",
    },
    {
      fruit_name: "Pomegranate",
      fruit_color: "Red",
    },
    {
      fruit_name: "Banana",
      fruit_color: "Yellow",
    },
    {
      fruit_name: "Grapes",
      fruit_color: "Green",
    },
  ];

  const alpha = filterObjects("Red", fruits_details);
  const isRedExists = findOneObj("Redsd", fruits_details);
  const isDataExist =  findOneItem("Red", fruits_details);
  const abc = PackArray()
  console.log("abc", abc);
  
  return (
    <div className="flex flex-wrap gap-12 pt-4">
    {alpha ?
      alpha?.map((fruit, index) => (
        <>
          <div
            key={index}
            className="max-w-sm w-full bg-white shadow-md rounded-lg p-6"
          >
            <h2 className="text-xl font-bold mb-4">{fruit?.fruit_name}</h2>
            <div className="mb-4">
              <p className="text-gray-700 text-sm font-bold">Fruit Name</p>
              <p className="text-gray-900">{fruit?.fruit_name}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm font-bold">Fruit Color</p>
              <p className="text-gray-900">{fruit?.fruit_color}</p>
            </div>
          </div>
        </>
      )) : ""}
  </div>
  )
};

export default Practice1;
