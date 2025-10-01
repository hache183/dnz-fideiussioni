import { useEffect, useState } from 'react';

/**
 * Performance Monitor Component
 * Shows performance metrics in development mode only
 * Displays FPS, memory usage, and render time
 */
const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fps: 0,
    memory: 0,
    renderTime: 0,
    visible: false
  });

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    let frameCount = 0;
    let lastTime = performance.now();
    let rafId;

    const updateMetrics = (currentTime) => {
      frameCount++;
      
      const elapsed = currentTime - lastTime;
      
      // Update every second
      if (elapsed >= 1000) {
        const fps = Math.round((frameCount * 1000) / elapsed);
        const memory = performance.memory 
          ? Math.round(performance.memory.usedJSHeapSize / 1048576) // Convert to MB
          : 0;

        setMetrics(prev => ({
          ...prev,
          fps,
          memory
        }));

        frameCount = 0;
        lastTime = currentTime;
      }

      rafId = requestAnimationFrame(updateMetrics);
    };

    rafId = requestAnimationFrame(updateMetrics);

    // Keyboard shortcut to toggle visibility (Ctrl/Cmd + Shift + P)
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setMetrics(prev => ({ ...prev, visible: !prev.visible }));
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV !== 'development' || !metrics.visible) {
    return null;
  }

  return (
    <div 
      className="fixed top-20 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs font-mono z-[9999] shadow-xl"
      style={{ minWidth: '180px' }}
    >
      <div className="font-bold mb-2 border-b border-gray-600 pb-1">
        ⚡ Performance Monitor
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={metrics.fps < 30 ? 'text-red-400' : 'text-green-400'}>
            {metrics.fps}
          </span>
        </div>
        {metrics.memory > 0 && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={metrics.memory > 100 ? 'text-yellow-400' : 'text-green-400'}>
              {metrics.memory} MB
            </span>
          </div>
        )}
        <div className="text-gray-400 text-[10px] mt-2 pt-1 border-t border-gray-700">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;