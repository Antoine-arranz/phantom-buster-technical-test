import { HTMLAttributes, ReactNode } from "react";
import FilterButton from "../FilterButton/FilterButton";

interface CategoriesListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
}

const CategoriesList = ({
  children,
  onClick,
  isActive,
}: CategoriesListProps) => {
  return (
    <li className='mt-1 pl-3 flex list-none hover:cursor-pointer text-lg'>
      <FilterButton
        onClick={onClick}
        isActive={isActive}
        className={`mt-1 px-3 py-3 h-4 flex items-center ${
          isActive &&
          "justify-between mt-1 px-3 py-3 flex w-full text-white items-center font-light bg-bcg-filter rounded-md hover:bg-bcg-filter-hover"
        }`}
      >
        {children}
      </FilterButton>
    </li>
  );
};

export default CategoriesList;