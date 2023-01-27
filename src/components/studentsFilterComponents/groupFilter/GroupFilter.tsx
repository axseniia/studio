import * as React from "react";
import { Checkbox } from "../checkbox/Checkbox";
import { StudentsContext } from "../../../context/context";
import { IStudentsFilters } from '../../../interfaces/interfaces';

import "./groupFilter.css";

export function GroupFilter() {
  return (
    <StudentsContext.Consumer>
      {({
        studentsFilters, 
        onFiltersChange
      }: {
        studentsFilters: IStudentsFilters, 
        onFiltersChange: (studentsFilters: IStudentsFilters) => void
      }) => (
        <div className="groupFilter">
          {studentsFilters.groupFilter.map((groupFilter: {name: string, active: boolean}, index: number) => {
            return <Checkbox 
              key={index} 
              {...groupFilter} 
              onClick={() => onClick(index, studentsFilters, onFiltersChange)}
            />
          })}
        </div>
      )}
    </StudentsContext.Consumer>
  );
  function onClick(
    index: number,
    studentsFilters: IStudentsFilters,
    onFiltersChange: (studentsFilters: IStudentsFilters) => void
    ) {
      studentsFilters.groupFilter[index].active = !studentsFilters.groupFilter[index].active;
      onFiltersChange({...studentsFilters});
  }
}