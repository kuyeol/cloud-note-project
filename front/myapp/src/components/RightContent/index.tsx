import { QuestionCircleOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang  } from '@umijs/max';
import { SelectLang0 } from '../HeaderDropdown/headerLocale';
export type SiderTheme = 'light' | 'dark';

import React, { useState } from 'react';


import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import {getAllLocales, getLocale, setLocale} from "../../../umi/plugin-locale";



// ----------------------------------------------------------------------




export const SelectLang = () => {

    return (
      <>
  <SelectLang0  style={{ padding: 5, }} />
  <UmiSelectLang icon={">"} style={{ padding: 5 }} />
      </>
    );
};



export const Question = () => {
  return(
<>

     <h2>영역1</h2>
  <h3>영역2</h3>
  <h4>영역3</h4>

</>

   );

};


