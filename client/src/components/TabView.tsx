import React from 'react'

interface TabViewProps {
  index: number,
  currentIndex: number,
  children?: any
}

const TabView = ({
  index,
  currentIndex,
  children
}: TabViewProps) => {
  if (index !== currentIndex) {
    return null;
  }

  return (
    <>
    {children}
    </>
  )
};

export default TabView;