import Profile from '../components/profile';
import ProjectsSection from '../components/projects/ProjectsSection';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="w-full md:w-[280px] flex-shrink-0">
        <Profile />
      </aside>
      <main className="flex-1 w-full">
        <ProjectsSection />
      </main>
    </div>
  );
}