import FeaturedCard from "@/components/FeaturedCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Shawn Barron</h1>
        <p className="mt-4 text-lg text-gray-500">
          Software Engineer and science enthusiast.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <FeaturedCard
          title="Featured Project"
          description="Preview of a chosen project"
          image="/previews/Orbiter.png"
          href="/projects"
        ></FeaturedCard>
      </div>
    </main>
  );
}
