import * as React from "react";
import { GroupCheckbox } from "../groupCheckbox/groupCheckbox";

import "./groupFilter.css";

export function GroupFilter() {
  return (
    <div className="groupFilter">
      <GroupCheckbox group="contemp" active={true} />
      <GroupCheckbox group="streiching" active={false} />
      <GroupCheckbox group="frame up"  active={false}/>
      <GroupCheckbox group="hip hop" active={false} />
      <GroupCheckbox group="dance hall"  active={false}/>
      <GroupCheckbox group="high heels" active={true} />
    </div>
  );
}