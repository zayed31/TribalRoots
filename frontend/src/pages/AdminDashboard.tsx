import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

export default function AdminDashboard() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <Navbar />
            <main className="flex-1 p-8">
              <div className="mb-6">
                <BackButton />
              </div>
              <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
              {/* Admin dashboard content will go here */}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

