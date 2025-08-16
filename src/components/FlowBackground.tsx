"use client";
import { useEffect, useRef, useState } from 'react';
import { createFlowBackground } from '../lib/flowBrackground';

type FlowOptions = Partial<Parameters<typeof createFlowBackground>[1]>;

export default function FlowBackground({
  className = '',
  options = {},
}: {
  className?: string;
  options?: FlowOptions;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [paletteMode, setPaletteMode] = useState<'day' | 'night'>('day');

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setPaletteMode(match.matches ? 'night' : 'day');
    const handler = (e: MediaQueryListEvent) => setPaletteMode(e.matches ? 'night' : 'day');
    match.addEventListener('change', handler);
    return () => match.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const destroy = createFlowBackground(ref.current, {
      zIndex: -1,
      paletteMode,
      ...options,
    });
    return () => destroy && destroy();
  }, [options, paletteMode]);

  return <div className={className} ref={ref} aria-hidden="true" />;
}
