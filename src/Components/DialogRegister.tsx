import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Data from '../Data/preference.json'; // preference.json 파일을 가져옴
import { typography } from '@mui/system';


// 유형별 데이터를 나누는 함수
const getOptionsByRange = (start: number, end: number) => {
  return Data.filter(item => item.ID >= start && item.ID <= end).map(item => item.description);
};

export interface ConfirmationDialogRawProps {
  id: string;
  keepMounted: boolean;
  value: string[];
  open: boolean;
  onClose: (value?: string[]) => void;
  options: string[]; // options를 props로 받도록 설정
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
  const { onClose, value: valueProp, open, options, ...other } = props; // options를 받아옴
  const [value, setValue] = React.useState<string[]>(valueProp || []);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp || []);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (option: string) => {
    setValue((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%', maxHeight: 435 } }}
      maxWidth="sm"
      open={open}
      {...other}
    >
      <DialogTitle>자신을 설명할 문장 2개 이상 선택해 주세요.</DialogTitle>
      <DialogContent dividers>
        <FormGroup>
          {options.map((option) => ( // options 배열을 사용하여 체크박스 생성
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={value.includes(option)}
                  onChange={() => handleChange(option)}
                />
              }
              label={option}
            />
          ))}
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
        취소
        </Button>
        <Button onClick={handleOk}>확인</Button>
      </DialogActions>
    </Dialog>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      contrastText: '#47008F',
    },
    text: {
      primary: '#000000',
      secondary: '#46505A',
    },
  },
    typography: {
      fontFamily:"GamtandotumBold"
  },
  });

interface DialogRegisterProps {
  onSelectionChange: (selectedItems: number[]) => void;
}

export default function DialogRegister({ onSelectionChange }: DialogRegisterProps) {
  const [dialogs, setDialogs] = React.useState(
    Array.from({ length: 5 }, (_, i) => ({
      open: false,
      value: [] as string[],
      options: getOptionsByRange(i * 5 + 1, (i + 1) * 5),
    }))
  );

  const handleClickListItem = (index: number) => {
    const newDialogs = dialogs.map((dialog, i) =>
      i === index ? { ...dialog, open: true } : dialog
    );
    setDialogs(newDialogs);
  };

  const handleClose = (index: number, newValue?: string[]) => {
    const newDialogs = dialogs.map((dialog, i) =>
      i === index ? { ...dialog, open: false, value: newValue || dialog.value } : dialog
    );
    setDialogs(newDialogs);

    const selectedItems = newDialogs.flatMap(dialog =>
      dialog.value.map(val => Data.find((d: { description: string, ID: number }) => d.description === val)?.ID)
        .filter(Boolean) as number[]
    );
    onSelectionChange(selectedItems);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', textAlign: 'center', borderRadius: '30%' }}>
        <List component="div" role="group">
          <ListItemButton divider disabled>
            <ListItemText primary="아래의 유형을 클릭해주세요." sx={{ textAlign: 'center', color: 'text.primary' }} />
          </ListItemButton>

          {dialogs.map((dialog, index) => (
            <React.Fragment key={index}>
              <ListItemButton
                divider
                aria-haspopup="true"
                aria-controls="ringtone-menu"
                aria-label={`유형 ${index + 1}`}
                onClick={() => handleClickListItem(index)}
                sx={{ textAlign: 'center' }}
              >
                <ListItemText
                  primary={`유형 ${index + 1}`}
                  secondary={dialog.value.join(' ')}
                  sx={{ textAlign: 'center' }}
                />
              </ListItemButton>

              <ConfirmationDialogRaw
                id={`ringtone-menu-${index}`}
                keepMounted
                open={dialog.open}
                onClose={(newValue) => handleClose(index, newValue)}
                value={dialog.value}
                options={dialog.options}
              />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  );
}

  // export default function DialogRegister({ onSelectionChange }: DialogRegisterProps) {
  //   const [dialogs, setDialogs] = React.useState(
  //     Array.from({ length: 5 }, (_, i) => ({
  //       open: false,
  //       value: [] as string[],
  //       options: getOptionsByRange(i * 5 + 1, (i + 1) * 5),
  //     }))
  //   );
  
  //   const handleClickListItem = (index: number) => {
  //     const newDialogs = dialogs.map((dialog, i) =>
  //       i === index ? { ...dialog, open: true } : dialog
  //     );
  //     setDialogs(newDialogs);
  //   };
  
  //   const handleClose = (index: number, newValue?: string[]) => {
  //     const newDialogs = dialogs.map((dialog, i) =>
  //       i === index ? { ...dialog, open: false, value: newValue || dialog.value } : dialog
  //     );
  //     setDialogs(newDialogs);
  
  //     const selectedItems = newDialogs.flatMap(dialog =>
  //       dialog.value.map(val => data.find(d => d.description === val)?.ID).filter(Boolean) as number[]
  //     );
  //     onSelectionChange(selectedItems);
  //   };
  
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <Box sx={{ width: '100%', textAlign: 'center', borderRadius: '30%' }}>
  //         <List component="div" role="group">
  //           <ListItemButton divider disabled>
  //             <ListItemText primary="아래의 유형을 클릭해주세요." sx={{ textAlign: 'center', color: 'text.primary' }} />
  //           </ListItemButton>
  
  //           {dialogs.map((dialog, index) => (
  //             <React.Fragment key={index}>
  //               <ListItemButton
  //                 divider
  //                 aria-haspopup="true"
  //                 aria-controls="ringtone-menu"
  //                 aria-label={`유형 ${index + 1}`}
  //                 onClick={() => handleClickListItem(index)}
  //                 sx={{ textAlign: 'center' }}
  //               >
  //                 <ListItemText
  //                   primary={`유형 ${index + 1}`}
  //                   secondary={dialog.value.join(' ')}
  //                   sx={{ textAlign: 'center' }}
  //                 />
  //               </ListItemButton>
  
  //               <ConfirmationDialogRaw
  //                 id={`ringtone-menu-${index}`}
  //                 keepMounted
  //                 open={dialog.open}
  //                 onClose={(newValue) => handleClose(index, newValue)}
  //                 value={dialog.value}
  //                 options={dialog.options}
  //               />
  //             </React.Fragment>
  //           ))}
  //         </List>
  //       </Box>
  //     </ThemeProvider>
  //   );
  // }
  
