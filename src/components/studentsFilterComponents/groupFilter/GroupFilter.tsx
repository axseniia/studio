import * as React from "react";
import { GroupCheckbox } from "../groupCheckbox/groupCheckbox";
import { StudentsContext } from "../../../context/context";
import { IGroupCheckbox } from '../../../interfaces/interfaces';

import "./groupFilter.css";

export function GroupFilter() {
  function onClick(index: number, groupFilters: IGroupCheckbox[], setter: (value : IGroupCheckbox[]) => void) {
      groupFilters[index].active = !groupFilters[index].active;
      setter([...groupFilters]);
  }
  return (
    <StudentsContext.Consumer>
      {({groupFilters, setGroupFilter}: {groupFilters: IGroupCheckbox[], setGroupFilter: (value : IGroupCheckbox[]) => void} ) => (
        <div className="groupFilter">
          {groupFilters.map((groupFilter: {name: string, active: boolean}, index: number) => {
            return <GroupCheckbox 
              key={index} 
              {...groupFilter} 
              onClick={() => onClick(index, groupFilters, setGroupFilter)}
            />
          })}
        </div>
      )}
    </StudentsContext.Consumer>
  );
}