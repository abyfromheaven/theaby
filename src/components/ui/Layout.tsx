
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Aby. No rights reserved. Hack the planet.</p>
      </footer>
    </div>
  );
};

export default Layout;
