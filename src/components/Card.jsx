import { useFetch } from "../utils/fetchApi";

const Card = () => {
  const { data, isLoading, error } = useFetch();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-60">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 bg-gray-600">
        </div>
      </div>
    );
  } 
   if (error) {
    return <span>There is something wrong</span>;
  }

  return (
    <div className="flex flex-wrap gap-12">
      {data ?
        data?.map((user) => (
          <>
            <div
              key={user?.id}
              className="max-w-sm w-full bg-white shadow-md rounded-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4">{user?.name ?? ""}</h2>
              <div className="mb-4">
                <p className="text-gray-700 text-sm font-bold">Name</p>
                <p className="text-gray-900">{user?.name}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 text-sm font-bold">Username</p>
                <p className="text-gray-900">{user?.username}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 text-sm font-bold">Email</p>
                <p className="text-gray-900">{user?.email}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 text-sm font-bold">Website</p>
                <p className="text-gray-900">{user?.website}</p>
              </div>
            </div>
          </>
        )) : ""}
    </div>
  );
};

export default Card;
