function Card({ children, title, color = "blue" }) {
  const colorClases = {
   blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  };

  return (
    <div
      className={`border-l-4 ${colorClases[color]} p-6 rounded-lg shadow-md mt-2`}
    >
      {title && <h3 className="text-xl font-bold  text-gray-800">{title}</h3>}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-2">Children Props</h2>
      <p>
        The children prop allowed you to pass JSX elements or components as children to other components, enabling component composition.
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-xl">Card Component with children</h3>
          <Container layout="grid">
            <Card title="User Profile" color="blue">
              <p className="mb-2">
                <strong>Name : </strong> Shivam
              </p>
              <p className="mb-2">
                <strong>Email : </strong> shivamch0865@gmail.com
              </p>
              <p className="mb-2">
                <strong>Role : </strong> Student/MERN Developer
              </p>
            </Card>

            <Card title="Statistics" color="green">
              <p className="mb-2 flex justify-between">
                Total Users: <strong>1,234</strong>
              </p>
              <p className="mb-2 flex justify-between">
                Active Users: <strong>567</strong>
              </p>
              <p className="mb-2 flex justify-between">
                Revenue: <strong>$89,000</strong>
              </p>
            </Card>

            <Card title="Quick Actions" color="purple">
              <div className="flex flex-col  ">
                <button className="rounded-xl bg-purple-500 px-4 py-2 text-white cursor-pointer mt-2 hover:bg-purple-600 transition">
                  Create New
                </button>
                <button className="rounded-xl bg-gray-500  px-4 py-2 text-white cursor-pointer mt-2 hover:bg-gray-600 transition">
                  View All
                </button>
              </div>
            </Card>

            <Card title="Warning" color="red">
              <p className="mt-2">
                Your Trail period end in 5 days.Please upgrade your account to
                continue using all features.
              </p>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default ChildrenProps;
