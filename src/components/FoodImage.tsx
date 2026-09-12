import Image from "next/image";

type FoodImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function FoodImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "object-cover",
}: FoodImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
