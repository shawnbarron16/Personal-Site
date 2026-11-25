import Image from "next/image";
import Link from "next/link";

//Create a type for the featured cards on the home page
type FeaturedCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

//Return the JSX for a Featured Card
export default function FeaturedCard({
  title,
  description,
  image,
  href,
}: FeaturedCardProps) {
  return (
    <Link href={href}>
      <h2 className="text-center mb-5">{title}</h2>
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          sizes="(min-width:768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <p className="text-center mt-5">{description}</p>
    </Link>
  );
}
