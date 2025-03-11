import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import User from "../features/user/Username";

function Header() {
  return (
    <header className="order-b-2 flex h-16 items-baseline justify-between border-stone-200 bg-yellow-500 px-4 py-3 align-baseline uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
}

export default Header;
