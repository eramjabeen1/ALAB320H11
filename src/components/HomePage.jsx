import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function HomePage() {
  return (
    <div className="homePage">
      <div>HomePage</div>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  )
}
