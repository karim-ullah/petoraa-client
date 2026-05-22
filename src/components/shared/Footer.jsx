import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">PetoRaa</h2>
          <p className="mt-4 text-gray-400">
            Helping pets find loving homes and caring families around the world.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Information
          </h3>

          <div className="space-y-2 text-gray-400">
            <p>Email: support@petoRaa.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-gray-400">
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">LinkedIn</Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © 2026 PetoRaa. All rights reserved.
      </div>
    </footer>
  );
}