export interface EmbeddedPlayerProps {
    title?: string;
    width?: string;
    height?: string;
    embedUrl: string;
    allowfullscreen?: boolean;
    features?: EmbeddedFeatureTypes[];
    frameBorder?: string;
}
declare type EmbeddedFeatureTypes = 'accelerometer' | 'autoplay' | 'clipboard-write' | 'color' | 'controls' | 'disablekb' | 'encrypted-media' | 'gyroscope' | 'h1' | 'modestbranding' | 'picture-in-picture' | 'playlist' | 'playsinline' | 'listType' | 'list' | 'loop' | 'start' | 'showinfo';
export {};
//# sourceMappingURL=EmbeddedPlayer.interface.d.ts.map