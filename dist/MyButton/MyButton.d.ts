import React, { FC } from 'react';
export interface MyButtonProps {
    color: string;
    big: boolean;
    children: React.ReactNode;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
