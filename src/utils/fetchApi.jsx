import useSWR from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
export function useFetch() {
  const { data, error, isValidating  } = useSWR(import.meta.env.VITE_URL, fetcher);

  return {
    data,
    error,
    isLoading: isValidating ,
  };
}



export const useTableData = () => {
 const {data, error, isValidating }  = useSWR(import.meta.env.VITE_TABLE_URL, fetcher)

 return {
  data,
  error,
  isLoading: isValidating 
 }
} 



//practice for looping problems to be resolved

export function filterObjects(propertyValue, fruitsArr) {
  let newArr = [];
  for (let i = 0; i < fruitsArr?.length; i++) {
    if (fruitsArr[i]?.fruit_color === propertyValue) {
      newArr.push(fruitsArr[i]);
    }
  }
  return newArr;
}

export function findOneObj(propertyValue, fruitsArr){
  var findVar = false
  for(let i = 0; i < fruitsArr?.length; i++){
    if(fruitsArr[i]?.fruit_color === propertyValue){
     findVar = true
    }
  }
  return findVar;
}

export function findOneItem(propertyValue, fruitsArr){
   const alpha = fruitsArr?.find((i) => i?.fruit_color === propertyValue)
  return alpha
}

let mainArray = [{
  id: 1,
  name: 'Sandip'
},
{
  id: 2,
  name: 'Mandip'
},
{
  id: 3,
  name: 'Mandip'
},
{
  id: 4,
  name: 'Praveen'
},
{
  id: 5,
  name: 'Praveen'
},
{
  id: 6,
  name: 'Mandip'
},
{
  id: 7,
  name: 'Mandip'
},
];

let filterArray = [{
  id: 1,
  name: 'Mandip'
},
{
  id: 3,
  name: 'Mandip'
}
];

export const PackArray = () => {
 let newObjArr = []
  for(let i = 0; i < mainArray?.length; i++){
  for(let a = 0; a < filterArray?.length; a++){
    if(filterArray[a]?.name === mainArray[i]?.name){
      newObjArr.push(mainArray[i])
      break
    }
  }
 }
 return newObjArr
}