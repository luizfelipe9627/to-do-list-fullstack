import Header from "./components/Header/Header";
import Tasks from "./components/Task/Tasks";

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-600 font-Inter">
        <Tasks />
      </main>
    </>
  );
};

export default App;
