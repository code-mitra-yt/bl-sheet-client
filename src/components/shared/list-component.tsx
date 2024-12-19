import React from "react";

interface ListComponentProps {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
}

const ListComponent = ({ data = [], renderItem }: ListComponentProps) => {
  return <>{data.map((item) => renderItem(item))}</>;
};

export default ListComponent;
