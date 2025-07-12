declare const SpeedInsights: () => any;
export default SpeedInsights;

// Global for beforeSend (as per docs)
declare global {
  interface Window {
    speedInsightsBeforeSend?: (data: Event) => Event | null | undefined | false;
    interface Event {
      type: 'vital';
      url: string;
    }
  }
}