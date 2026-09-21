export default function DoctorCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-primary/10" aria-hidden="true">
      <div className="aspect-[4/3] w-full animate-pulse bg-primary-50 sm:aspect-[4/4]" />
      <div className="space-y-3 p-6">
        <div className="h-5 w-3/4 animate-pulse rounded-full bg-primary-50" />
        <div className="h-4 w-2/3 animate-pulse rounded-full bg-primary-50" />
        <div className="h-4 w-1/2 animate-pulse rounded-full bg-primary-50" />
        <div className="h-11 w-full animate-pulse rounded-full bg-primary-50" />
      </div>
    </div>
  )
}
