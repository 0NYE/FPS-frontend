import { TagLayout, TagDeleteButton } from "@/components/Tag/Tag.styles";

interface TagProps {
  children: string;
  removable?: boolean;
  onDelete?: (target: string) => void;
}

const Tag = ({ children, removable, onDelete }: TagProps) => {
  const buttonClickHandler = () => {
    onDelete && onDelete(children);
  };

  return (
    <TagLayout>
      {children}
      {removable && (
        <TagDeleteButton onClick={buttonClickHandler}>&#10005;</TagDeleteButton>
      )}
    </TagLayout>
  );
};

export default Tag;
