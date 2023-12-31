import { useEffect, useState, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const HydrationZustand: React.FC<LayoutProps> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <div>{children}</div> : null}</>;
};

export default HydrationZustand;
