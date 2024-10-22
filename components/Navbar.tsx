export default function Navbar() {
    return (
      <nav className="bg-slate-800 p-4 text-white flex justify-between items-center w-screen">
        <div className="text-xl font-bold">Target Dashboard</div>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:text-sky-300">Home</a></li>
          <li><a href="/dashboard" className="hover:text-sky-300">Dashboard</a></li>
        </ul>
      </nav>
    );
  }
  