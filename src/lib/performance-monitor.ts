// Performance monitoring utilities for preview page
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private isEnabled: boolean = false;

  private constructor() {
    this.isEnabled = typeof window !== 'undefined' && 
      'performance' in window && 
      !window.location.search.includes('perf=false');
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public startTiming(label: string): void {
    if (!this.isEnabled) return;
    this.metrics.set(label, performance.now());
  }

  public endTiming(label: string): number {
    if (!this.isEnabled) return 0;
    
    const startTime = this.metrics.get(label);
    if (!startTime) return 0;
    
    const duration = performance.now() - startTime;
    this.metrics.delete(label);
    
    if (duration > 100) {
      console.warn(`⚠️ Performance: ${label} took ${duration.toFixed(2)}ms`);
    } else if (duration > 16) {
      console.log(`📊 Performance: ${label} took ${duration.toFixed(2)}ms`);
    }
    
    return duration;
  }

  public measureWebVitals(): void {
    if (!this.isEnabled) return;

    // Measure Core Web Vitals
    this.measureLCP();
    this.measureFID();
    this.measureCLS();
    this.measureTTI();
  }

  private measureLCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = lastEntry.startTime;
        
        if (lcp > 2500) {
          console.warn(`🐌 LCP: ${lcp.toFixed(2)}ms (Poor - should be < 2.5s)`);
        } else if (lcp > 1000) {
          console.log(`⚠️ LCP: ${lcp.toFixed(2)}ms (Needs improvement - should be < 2.5s)`);
        } else {
          console.log(`✅ LCP: ${lcp.toFixed(2)}ms (Good)`);
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP measurement not supported');
      }
    }
  }

  private measureFID(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          
          if (fid > 300) {
            console.warn(`🐌 FID: ${fid.toFixed(2)}ms (Poor - should be < 100ms)`);
          } else if (fid > 100) {
            console.log(`⚠️ FID: ${fid.toFixed(2)}ms (Needs improvement)`);
          } else {
            console.log(`✅ FID: ${fid.toFixed(2)}ms (Good)`);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID measurement not supported');
      }
    }
  }

  private measureCLS(): void {
    if ('PerformanceObserver' in window) {
      let clsScore = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsScore += entry.value;
          }
        });

        if (clsScore > 0.25) {
          console.warn(`🐌 CLS: ${clsScore.toFixed(3)} (Poor - should be < 0.1)`);
        } else if (clsScore > 0.1) {
          console.log(`⚠️ CLS: ${clsScore.toFixed(3)} (Needs improvement)`);
        } else {
          console.log(`✅ CLS: ${clsScore.toFixed(3)} (Good)`);
        }
      });

      try {
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS measurement not supported');
      }
    }
  }

  private measureTTI(): void {
    // Simple TTI approximation
    const checkTTI = () => {
      if (document.readyState === 'complete') {
        const tti = performance.now();
        
        if (tti > 5000) {
          console.warn(`🐌 TTI: ${tti.toFixed(2)}ms (Poor - should be < 3.8s)`);
        } else if (tti > 3800) {
          console.log(`⚠️ TTI: ${tti.toFixed(2)}ms (Needs improvement)`);
        } else {
          console.log(`✅ TTI: ${tti.toFixed(2)}ms (Good)`);
        }
      } else {
        setTimeout(checkTTI, 100);
      }
    };

    checkTTI();
  }

  public logResourceTiming(): void {
    if (!this.isEnabled) return;

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    console.group('📊 Resource Performance');
    
    // Group by type
    const resourcesByType: { [key: string]: PerformanceResourceTiming[] } = {};
    resources.forEach(resource => {
      const type = this.getResourceType(resource.name);
      if (!resourcesByType[type]) {
        resourcesByType[type] = [];
      }
      resourcesByType[type].push(resource);
    });

    // Log slow resources
    Object.entries(resourcesByType).forEach(([type, typeResources]) => {
      const slowResources = typeResources.filter(r => r.duration > 500);
      if (slowResources.length > 0) {
        console.group(`🐌 Slow ${type} resources (>500ms):`);
        slowResources.forEach(resource => {
          console.log(`${resource.name}: ${resource.duration.toFixed(2)}ms`);
        });
        console.groupEnd();
      }
    });

    console.groupEnd();
  }

  private getResourceType(url: string): string {
    if (url.includes('.js')) return 'JavaScript';
    if (url.includes('.css')) return 'CSS';
    if (url.match(/\.(jpg|jpeg|png|gif|webp|avif)$/i)) return 'Images';
    if (url.match(/\.(woff|woff2|ttf|otf)$/i)) return 'Fonts';
    if (url.includes('three')) return 'Three.js';
    return 'Other';
  }

  public measureComponentLoad(componentName: string): {
    start: () => void;
    end: () => void;
  } {
    return {
      start: () => this.startTiming(`Component:${componentName}`),
      end: () => this.endTiming(`Component:${componentName}`)
    };
  }
}

// Auto-initialize on page load
if (typeof window !== 'undefined') {
  const monitor = PerformanceMonitor.getInstance();
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      monitor.measureWebVitals();
      monitor.logResourceTiming();
    }, 1000);
  });

  // Expose to global for debugging
  (window as any).perfMonitor = monitor;
}
