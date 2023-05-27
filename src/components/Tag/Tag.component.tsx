import { TagLayout, TagDeleteButton } from "@/components/Tag/Tag.styles";

export type TagSize = "small" | "medium";

interface TagProps {
  children: string;
  size?: TagSize;
  removable?: boolean;
  onDelete?: (target: string) => void;
}

const Tag = ({ children, size = "small", removable, onDelete }: TagProps) => {
  const buttonClickHandler = () => {
    onDelete && onDelete(children);
  };

  return (
    <TagLayout size={size}>
      {children}
      {removable && (
        <TagDeleteButton onClick={buttonClickHandler}>&#10005;</TagDeleteButton>
      )}
    </TagLayout>
  );
};

export default Tag;
