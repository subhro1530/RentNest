// pages/index.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">
        Welcome to Our Hotel Search App
      </h1>
      <p className="text-lg mb-6">
        Find the perfect hotels and rental homes for your next stay!
      </p>
      <Link href="/login">
        <a className="btn btn-primary">Login</a>
      </Link>
    </div>
  );
}
