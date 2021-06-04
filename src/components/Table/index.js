import React from 'react';

export const Table = ({ children }) => {
  return <table className="w-full table-fixed relative">{children}</table>;
};

Table.Header = function TableHeader({ children }) {
  return <thead>{children}</thead>;
};

Table.HeaderRow = function TableHeaderRow({ children }) {
  return <tr className="h-10 bg-gray-100">{children}</tr>;
};

Table.HeaderCell = function TableHeaderCell({
  children,
  textAlign,
  cellWidth,
}) {
  return (
    <th className={`text-sm font-medium ${cellWidth} ${textAlign}`}>
      {children}
    </th>
  );
};

Table.Body = function TableBody({ children }) {
  return <tbody className="bg-white">{children}</tbody>;
};
