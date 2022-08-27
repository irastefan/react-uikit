import React, {FC} from 'react';
import './MyButton.css';

export interface MyButtonProps {
    color: string,
    big?: boolean,
    children: React.ReactNode,
}

const MyButton: FC<MyButtonProps> = ({ children, color, big=false, ...props }) => {
  
  const rootClasses = ['btn'];
  if (big) {
    rootClasses.push('big-btn');
  }
 
  return (
    <button {...props} className={rootClasses.join(' ')} style={{color}}>
        {children}
    </button>
  )
}

export default MyButton