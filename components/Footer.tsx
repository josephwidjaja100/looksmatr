import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <h2 
              className="text-4xl font-bold mb-2 text-gray-800"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              likely.one
            </h2>
            <p 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              © 2026 Likely One
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center">
            <h3 
              className="text-sm font-bold mb-4 uppercase tracking-wide text-gray-600"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/privacy" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/tos" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:contact@likely.one" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Schools Links */}
          <div className="flex flex-col items-center">
            <h3 
              className="text-sm font-bold mb-4 uppercase tracking-wide text-gray-600"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Schools
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://psu.likely.one" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Penn State
                </a>
              </li>
              <li>
                <a 
                  href="https://stanford.likely.one" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Stanford
                </a>
              </li>
              <li>
                <a 
                  href="https://berkeley.likely.one" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Berkeley
                </a>
              </li>
              <li>
                <a 
                  href="https://winchester.likely.one" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Winchester Thurston
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
