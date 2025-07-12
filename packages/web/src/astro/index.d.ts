declare const SpeedInsights: () => Promise<any>;
export default SpeedInsights;

interface Event {
  type: 'vital';
  url: string;
}

declare global {
  interface Window {
    speedInsightsBeforeSend?: (data: Event) => Event | null | undefined | false;
  }
}
