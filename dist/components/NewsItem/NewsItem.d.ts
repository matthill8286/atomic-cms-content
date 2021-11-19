import React from 'react';
import './style.css';
export interface INewsItem {
    image: string;
    title: string;
    description: string;
    date: string;
    newsText: string;
    buttonLabel: string;
    buttonLink: string;
}
export declare const NewsItem: React.MemoExoticComponent<({ image, title, description, date, newsText, buttonLabel, buttonLink }: INewsItem) => JSX.Element>;
//# sourceMappingURL=NewsItem.d.ts.map