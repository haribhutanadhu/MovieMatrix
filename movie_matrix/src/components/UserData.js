import { getUserData } from "../../utils/request";

const UserData = async () => {
  const data = await getUserData();
  console.log(data);

  return (
    <div>
      <div className="flex justify-center my-10">
        <h1 className="text-gray-500 text-2xl"> Total Loged In Users data</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((i) => (
            <div className="p-6 bg-black rounded-lg border border-gray-500 border-opacity-35 shadow-lg hover:shadow-xl transition-shadow">
              <h1 className="text-xl font-semibold text-gray-400">{i.name}</h1>
              <h1 className="text-md text-gray-400 mt-2">{i.email}</h1>
              <h1 className="text-sm text-gray-400 mt-1">First Login : 
                {" "}{new Date(i.createdAt).toLocaleDateString()}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserData;
