import {
  HistoryLayout,
  HistoryTime,
  HistoryTitle,
} from "./HistoryBlock.styles";

interface HistoryBlockProps {
  title: string;
  date: Date;
}

const HistoryBlock = ({ title, date }: HistoryBlockProps) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();

  return (
    <HistoryLayout>
      <HistoryTitle>{title}</HistoryTitle>
      <HistoryTime>
        {year}-{month}-{day} {hour}:{min}
      </HistoryTime>
    </HistoryLayout>
  );
};

export default HistoryBlock;
