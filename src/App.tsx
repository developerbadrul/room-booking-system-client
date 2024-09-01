import MainLayout from "./components/Layouts/MainLayout"
import useAuthCheck from "./hooks/useAuthCheck";


function App() {
  useAuthCheck();
  return (
    <MainLayout />
  )
}

export default App
