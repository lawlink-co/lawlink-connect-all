const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Skeleton header */}
        <div className="mb-12 space-y-4">
          <div className="h-12 bg-zinc-900 rounded w-3/4 max-w-md animate-pulse"></div>
          <div className="h-6 bg-zinc-900 rounded w-1/2 max-w-xs animate-pulse"></div>
        </div>
        
        {/* Skeleton content blocks */}
        <div className="space-y-8">
          <div className="h-64 bg-zinc-900 rounded animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-48 bg-zinc-900 rounded animate-pulse"></div>
            <div className="h-48 bg-zinc-900 rounded animate-pulse"></div>
          </div>
          <div className="h-32 bg-zinc-900 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;