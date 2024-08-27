import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 46;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 600,
    },
  },
};

// 데이터 타입 정의
interface Option {
  ID: number;
  type: string;
  word: string;
  description: string;
}

// 컴포넌트 정의
interface MultipleSelectCheckmarksProps {
  options: Option[];
  tag:string;
}

export default function MultipleSelectCheckmarks({
  options,
  tag
}: MultipleSelectCheckmarksProps) {
  const [selectedOptions, setSelectedOptions] = React.useState<number[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',').map(Number) : value
    );
    console.log(selectedOptions)
  };

  

  return (
    <div>
      <FormControl sx={{ width: 360 ,height: 46}}>
        <InputLabel id="demo-multiple-checkbox-label">{tag}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label="Tag"
          sx={{ height: 46, lineHeight: '46px' }} />}
          renderValue={(selected) => selected.map(id => {
            const option = options.find(option => option.ID === id);
            return option ? option.description : "";
          }).join(', ')}
          MenuProps={MenuProps}
          sx={{ height: 46 }}
        >
          {options.map((option) => (
            <MenuItem key={option.ID} value={option.ID}>
              <Checkbox checked={selectedOptions.indexOf(option.ID) > -1} />
              <ListItemText primary={option.description} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
