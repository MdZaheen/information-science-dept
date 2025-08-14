import Header from '@/components/Header';

export default function Overview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Department Overview
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              About Information Science Department
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                The Information Science Department at Government Polytechnic Kalaburagi is a premier 
                institution dedicated to providing quality technical education in the field of 
                Information Science and Engineering. Established with the vision of creating 
                skilled professionals for the ever-evolving IT industry, our department has been 
                at the forefront of technological education since its inception.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Our department offers a comprehensive three-year Diploma program in Information 
                Science, designed to equip students with both theoretical knowledge and practical 
                skills necessary for success in the information technology sector. The curriculum 
                is regularly updated to keep pace with industry requirements and emerging technologies.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                With a team of highly qualified and experienced faculty members, state-of-the-art 
                laboratories, and industry partnerships, we ensure that our students receive the 
                best possible education and training. Our graduates are well-prepared to take on 
                challenges in various IT domains including software development, web technologies, 
                database management, networking, and emerging fields like artificial intelligence 
                and machine learning.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Strengths</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Experienced and dedicated faculty with industry expertise
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Modern computer laboratories with latest software and hardware
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Industry-relevant curriculum updated regularly
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Strong placement record with leading IT companies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Active participation in technical events and competitions
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Three-year diploma program approved by AICTE
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Hands-on training in programming and software development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Project-based learning and industry internships
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Guest lectures by industry experts
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Technical clubs and student development activities
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Department Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Faculty Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-blue-200">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-blue-200">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Industry Partners</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300">
            <p>&copy; 2024 Information Science Department, Government Polytechnic Kalaburagi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
