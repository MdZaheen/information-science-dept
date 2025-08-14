import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import NewsTicker from '@/components/NewsTicker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSlider />
      <NewsTicker />
      
      {/* Government Notice Marquee */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block">
                <span className="text-sm text-gray-700 mr-8">
                  👉 Click here to register your grievance (if any) regarding any scheme/service delivery of Government of Karnataka | 
                  📞 Call 1902 | For Government Department Schemes and beneficiary information visit Mahiti Kanaja
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="container mx-auto px-4 py-12">
        {/* Department Overview Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Welcome to Information Science Department
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide quality technical education in Information Science and Engineering, 
                  fostering innovation, research, and industry-ready professionals who contribute 
                  to technological advancement and societal development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a center of excellence in Information Science education, producing 
                  skilled professionals and conducting cutting-edge research to meet the 
                  evolving needs of the IT industry and society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Quick Links
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Admission', link: '/admission', icon: '📚' },
              { title: 'Curriculum', link: '/curriculum', icon: '📋' },
              { title: 'Faculty', link: '/faculty', icon: '👨‍🏫' },
              { title: 'Facilities', link: '/facilities', icon: '🏢' },
              { title: 'Placement', link: '/placement', icon: '💼' },
              { title: 'Events', link: '/events', icon: '🎉' },
              { title: 'Student List', link: '/student-list', icon: '👥' },
              { title: 'Contact Us', link: '/contact', icon: '📞' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </section>

        {/* Department Stats */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Department at a Glance</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Faculty Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-blue-200">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-blue-200">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-blue-200">Modern Labs</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-300">Information Science Department</p>
              <p className="text-gray-300">Government Polytechnic Kalaburagi</p>
              <p className="text-gray-300">Karnataka, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/overview" className="hover:text-white">Overview</a></li>
                <li><a href="/admission" className="hover:text-white">Admission</a></li>
                <li><a href="/faculty" className="hover:text-white">Faculty</a></li>
                <li><a href="/placement" className="hover:text-white">Placement</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Government Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Karnataka Government</a></li>
                <li><a href="#" className="hover:text-white">DKTE</a></li>
                <li><a href="#" className="hover:text-white">AICTE</a></li>
                <li><a href="#" className="hover:text-white">DTE Karnataka</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-300">
            <p>&copy; 2024 Information Science Department, Government Polytechnic Kalaburagi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
