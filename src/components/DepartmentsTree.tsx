import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../index.css';
import data from '../data/departments.json';
import IDepartment from '../types/IDepartment';
import * as helper from '../utils/treeHelper';

export default function DepartmentsTree() {

  const initialList: IDepartment[] = helper.mapDepartments(data, -1);
  const [list, setList] = useState(initialList);

  const handleExpandIconClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    event.preventDefault();
    const newList = [...list];
    let item = newList.find(
      x => x.id == id
    );
    if (item) {
      item.expanded = !item.expanded;
    }
    setList(newList);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, item: IDepartment) => {
    const newList = [...list];
    let newItem = helper.search(newList, item.id);
    if(newItem){
      newItem.checked = event.target.checked;
      if(newItem.subDepartments){
        newItem.subDepartments?.forEach(x => x.checked = event.target.checked);
      }
      else {
        let parentItem = helper.search(newList, item.parentId);
        if(parentItem?.subDepartments?.every(x => x.checked === event.target.checked)){
          parentItem.checked = event.target.checked;
        } 
        else if(parentItem?.subDepartments?.some(x => x.checked != parentItem?.checked)){
          parentItem.checked = false;
        }
      }
    }
    setList(newList);
  };

  const treeItems = list.map(dataItem => (
    <Box key={dataItem.id}>
      <div data-value={dataItem.id} className='iconWrap' onClick={e => handleExpandIconClick(e, dataItem.id)}>
        {dataItem.expanded ? <ExpandMoreIcon className='icon' /> :
          <ChevronRightIcon className='icon' />}
      </div>
      <FormControlLabel
        style={{ display: 'inline-flex' }}
        label={dataItem.department}
        control={
          <Checkbox
            data-value={dataItem.id}
            checked={dataItem.checked}
            indeterminate={dataItem.subDepartments?.some(x => x.checked != dataItem.checked)}
            onChange={e => handleChange(e, dataItem)}
          />} />
      {dataItem.expanded &&
        <div className='childrenContainer'>
          {dataItem.subDepartments?.map(item => (
            <FormControlLabel 
              key = {item.id}
              style={{ display: 'flex' }}
              label={item.department}
              control={
                <Checkbox
                  checked={item.checked}
                  onChange={e => handleChange(e, item)}
                />} />
          ))}
        </div>
      }
    </Box>
  ));

  return (
    <>
      {treeItems}
    </>
  );
}