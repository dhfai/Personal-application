import React, { ReactNode } from 'react';
import { TransitionProvider } from "./provider/TransitionProvider";


interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang='en'>
            <body className='font-dm'>
                <TransitionProvider>
                    {children}
                </TransitionProvider>
            </body>
        </html>
    );
};
