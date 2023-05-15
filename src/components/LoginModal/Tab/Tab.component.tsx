import { useState } from "react";

import { TabItem, TabLayout } from "@/components/LoginModal/Tab/Tab.styles";

interface TabProps {
  items: string[];
  onChange: (selectedItem: string) => void;
}

const Tab = ({ items, onChange }: TabProps) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const itemOnClickHandler: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const item = (e.target as HTMLLIElement).textContent;
    if (!item) return;

    setSelectedItem(item);
    onChange(item);
  };

  return (
    <TabLayout>
      {items.map((item) => (
        <TabItem
          isSelected={item === selectedItem}
          onClick={itemOnClickHandler}
        >
          {item}
        </TabItem>
      ))}
    </TabLayout>
  );
};

export default Tab;
