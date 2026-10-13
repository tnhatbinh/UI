import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export interface UseSpotlightCarouselReturn {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0];
  selectedIndex: number;
  handlePrev: (e?: React.MouseEvent) => void;
  handleNext: (e?: React.MouseEvent) => void;
  handleDotClick: (targetIndex: number) => void;
}

export function useSpotlightCarousel(): UseSpotlightCarouselReturn {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 25,
    watchDrag: (_emblaApi, event) => {
      // Allow touch events on mobile/tablet
      if (
        'touches' in event ||
        ('pointerType' in event && event.pointerType === 'touch')
      ) {
        return true;
      }
      // On desktop, don't drag if clicking text or interactive elements
      const target = event.target as HTMLElement | null;
      if (
        target?.closest(
          "h1, h2, h3, p, span, button, a, input, [role='button'], .no-drag",
        )
      ) {
        return false;
      }
      return true;
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (emblaApi) emblaApi.scrollPrev();
    },
    [emblaApi],
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (emblaApi) emblaApi.scrollNext();
    },
    [emblaApi],
  );

  const handleDotClick = useCallback(
    (targetIndex: number) => {
      if (emblaApi) emblaApi.scrollTo(targetIndex);
    },
    [emblaApi],
  );

  return { emblaRef, selectedIndex, handlePrev, handleNext, handleDotClick };
}
