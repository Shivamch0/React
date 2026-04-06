import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToogler from "./components/ThemeToogler";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props" },
    { id: "ref", label: "Ref Props" },
    { id: "children", label: "Children Props" },
    { id: "complex", label: "Complex Props" },
    { id: "theme", label: "Theme Props" },
  ];

  return <nav className={` sticky top-0 z-50 shadow-md  ${
          isDark ? "text-white" : "text-gray-800"
        }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center gap-2 flex-wrap ">
          {sections.map((section) => (
            <button key={section.id} className={`px-4 py-2  rounded-lg font-medium bg-blue-600 text-white cursor-pointer hover:bg-sky-700 `}>
              <span >{section.label}</span>
            </button>
          ))}
        </div>
      </div>
  </nav>;
}

function AppContent() {
   const isDark = true;
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation/>
      <div className="container mx-auto px-4 py-8">
        <header className={`text-center mb-12 transition-colors ${
          isDark ? "text-white" : "text-gray-800"
        }`}>
          <h1 className="text-5xl font-bold mb-4">React Props</h1>
          <p className={`text-xl ${
            isDark ? "text-white" : "text-gray-800"
          }`}>A comprehensive guide to understanding props in React</p>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-20">
            <BasicProps />
          </div>
          <div id="children" className="scroll-mt-20">
            <ChildrenProps />
          </div>
          <div id="complex" className="scroll-mt-20">
            <ComplexProps />
          </div>
           <div id="ref" className="scroll-mt-20">
            <RefProps />
          </div>
          <div id="themeToggler" className="scroll-mt-20">
            <ThemeToogler />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
