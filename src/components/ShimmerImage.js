'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ShimmerImage({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  priority = false,
  loading = 'lazy',
  fill = false,
  sizes,
  ...rest
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`shimmer-image-wrapper ${isLoaded ? 'loaded' : ''} ${className}`}>
      <div className="shimmer-placeholder skeleton-shimmer" aria-hidden="true" />
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={loading}
        className="shimmer-img"
        style={style}
        onLoad={() => setIsLoaded(true)}
        {...rest}
      />
    </div>
  );
}
