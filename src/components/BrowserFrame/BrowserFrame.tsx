import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import type { ContentImage } from "@/content";
import { Shape } from "@/components/Shape/Shape";
import { Slides } from "./Slides";
import styles from "./BrowserFrame.module.css";

type FrameProps = {
  label: string;
  /** Width / height of the visible area. Defaults to 16:10. */
  aspectRatio?: number;
  children: ReactNode;
};

/** A geometric browser window: circle, square and triangle instead of traffic lights. */
export function BrowserFrame({ label, aspectRatio, children }: FrameProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.controls}>
          <Shape shape="circle" className={styles.control} />
          <Shape shape="square" className={styles.control} />
          <Shape shape="triangle" className={styles.control} />
        </span>
        <span className={styles.address}>{label}</span>
      </div>
      <div className={styles.viewport} style={aspectRatio ? { aspectRatio } : undefined}>
        {children}
      </div>
    </div>
  );
}

/** One tall screenshot that scrolls down and back up by itself; pauses on hover. */
export function ScrollingScreenshot({ image }: { image: ContentImage }) {
  // Longer pages scroll for longer, so the speed feels the same.
  const seconds = Math.min(60, Math.max(14, (image.height / image.width) * 6));

  return (
    <div className={styles.scroller} style={{ "--scroll-duration": `${seconds}s` } as CSSProperties}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 64rem) 70vw, 100vw"
        className={styles.tall}
      />
    </div>
  );
}

export function ScreenshotSlides({ images }: { images: ContentImage[] }) {
  return (
    <Slides labels={images.map((image) => image.alt)}>
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 64rem) 70vw, 100vw"
          className={styles.slideImage}
          priority={index === 0}
        />
      ))}
    </Slides>
  );
}

export function ScreenRecording({ src, poster, label }: { src: string; poster?: string; label: string }) {
  return (
    <video className={styles.video} src={src} poster={poster} autoPlay muted loop playsInline aria-label={label} />
  );
}
