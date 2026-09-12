import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function BrandLogo({
  className = "size-10",
  size = 40,
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={`relative inline-block overflow-hidden rounded-full ${className}`}>
      <Image
        src="/dishes/logo.png"
        alt="Rachida Cuisine"
        width={size}
        height={size}
        className="h-full w-full object-cover"
        priority={priority}
      />
    </span>
  );
}
