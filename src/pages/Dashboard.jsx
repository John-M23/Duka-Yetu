import DashboardLayout from "../Layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
     
      {/* <h1 className="text-2xl font-bold mb-6">Dashboard</h1> */}

      {/* 🔹 Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Unique Phone Numbers</p>
          <h2 className="text-3xl font-bold">622</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Valid Orders</p>
          <h2 className="text-3xl font-bold">916</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Valid Orders Today</p>
          <h2 className="text-3xl font-bold">2</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Income Today</p>
          <h2 className="text-3xl font-bold">360</h2>
        </div>
      </div>

      {/* 🔹 Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow h-[350px]">
          <h3 className="font-semibold mb-4">Daily Income</h3>
          {/* Chart goes here */}
        </div>

        <div className="bg-white p-6 rounded-xl shadow h-[350px]">
          <h3 className="font-semibold mb-4">Daily Order Counts</h3>
          {/* Chart goes here */}
        </div>

         <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Top Selling Product</p>
          <h6 className="">
        <ol>
          <li>Cocacolla - 100 units   ksh12,500</li>
          <li>Cocacolla - 100 units   ksh12,500</li>
        <li>Cocacolla - 100 units   ksh12,500</li>
        <li>Cocacolla - 100 units   ksh12,500</li>
        <li>Cocacolla - 100 units   ksh12,500</li>
        </ol>


          </h6>
        </div>

         <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Recent Orders</p>
          <h2 className="">
            <ol>
              <li>
            order#1024   <span bg green-200>completed</span> ksh1250 </li>
            <li>order#1023  <span bg yellow-200>pending</span> ksh1250 </li>
           
          </ol>
          </h2>
        </div>

         <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Low Stocks Alert </p>
          <h2 className="">

            <ol>
              <li>
            Raha 500ml   <span bg yellow-200>low stock</span> 5 units </li>
            <li>Raha 500ml   <span bg yellow-200>low stock</span> 5 units </li> 
            <li>Raha 500ml   <span bg yellow-200>low stock</span> 5 units </li>
            </ol>

          </h2>
        </div>

      </div>
    </DashboardLayout>
  );
}