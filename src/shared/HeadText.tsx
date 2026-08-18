import React from 'react'

type Props = {
  children: React.ReactNode;
  backgroundColor: string;
  action?: React.ReactNode;
};

const HeadText = ({ backgroundColor, children, action }: Props) => {
  return (
    <div className={`w-full ${backgroundColor} theme-surface pt-24 pb-6 px-24 md:px-40 flex items-baseline justify-between gap-4`}>
      <h1 className="font-satoshi text-base md:text-lg uppercase font-medium text-ink tracking-header-wide">{children}</h1>
      {action}
    </div>
  )
}

export default HeadText