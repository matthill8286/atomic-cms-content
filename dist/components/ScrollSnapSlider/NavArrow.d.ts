import React from 'react';
interface StyledNavArrowProps {
    direction: 'prev' | 'next';
    showArrows: boolean;
    fixedArrowPosition: boolean;
    zeroArrowPosition: boolean;
}
export interface NavArrowProps {
    onClick: () => void;
    direction: 'next' | 'prev';
    showArrows: boolean;
    fixedArrowPosition: boolean;
    zeroArrowPosition: boolean;
}
export declare const StyledNavArrow: import("styled-components").StyledComponent<"div", any, StyledNavArrowProps, never>;
export declare const NavArrow: React.ForwardRefExoticComponent<NavArrowProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=NavArrow.d.ts.map