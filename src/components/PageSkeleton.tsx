import { memo } from "react";

// Lightweight route-level skeleton - no animations, just structure
const PageSkeleton = memo(({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const bgClass = variant === "dark" ? "bg-black" : "bg-white";
  const navBorderClass = variant === "dark" ? "border-white/10" : "border-black/10";
  const placeholderClass = variant === "dark" ? "bg-zinc-800" : "bg-gray-200";

  return (
    <div className={`min-h-screen ${bgClass}`}>
      {/* Navigation skeleton */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b ${bgClass} ${navBorderClass}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className={`h-10 w-24 rounded ${placeholderClass}`} />
            <div className="hidden md:flex items-center space-x-8">
              <div className={`h-4 w-16 rounded ${placeholderClass}`} />
              <div className={`h-4 w-20 rounded ${placeholderClass}`} />
              <div className={`h-4 w-16 rounded ${placeholderClass}`} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section skeleton */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className={`h-16 sm:h-20 w-3/4 mx-auto rounded ${placeholderClass}`} />
          <div className={`h-6 sm:h-8 w-2/3 mx-auto rounded ${placeholderClass}`} />
          <div className="flex gap-4 justify-center pt-4">
            <div className={`h-12 w-36 rounded ${placeholderClass}`} />
            <div className={`h-12 w-36 rounded ${placeholderClass}`} />
          </div>
        </div>
      </section>
    </div>
  );
});

PageSkeleton.displayName = "PageSkeleton";

// Dark variant for Home, LawFirms pages
export const DarkPageSkeleton = memo(() => <PageSkeleton variant="dark" />);
DarkPageSkeleton.displayName = "DarkPageSkeleton";

// Light variant for Clients page
export const LightPageSkeleton = memo(() => <PageSkeleton variant="light" />);
LightPageSkeleton.displayName = "LightPageSkeleton";

export default PageSkeleton;
