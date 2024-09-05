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
import { ThemeProvider, createTheme } from '@mui/system';

const options = [
  '쓸모 있는 것을 좋아한다.',
  '일을 정확하고 세밀하게 한다.',
  '현장에서 일하는 것을 좋아한다.',
  '손을 이용해 무엇인가를 만드는 것을 좋아한다.',
  '전기나 기계와 관련된 일을 잘한다.'
];

export interface ConfirmationDialogRawProps {
  id: string;
  keepMounted: boolean;
  value: string[];
  open: boolean;
  onClose: (value?: string[]) => void;
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
  const { onClose, value: valueProp, open, ...other } = props;
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
          {options.map((option) => (
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
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
      success: {
        dark: '#009688',
      },
    },
  });

export default function DialogRegister() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string[]>([]);

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue?: string[]) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="div" role="group">
        <ListItemButton divider disabled>
            <ThemeProvider theme={theme}>
                <ListItemText primary="일자리 성격 유형 검사입니다."/>
            </ThemeProvider>
        </ListItemButton>
        <ListItemButton
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="phone ringtone"
          onClick={handleClickListItem}
        >
          <ListItemText primary="유형 1" secondary={value.join(' ')} />
        </ListItemButton>
        <ConfirmationDialogRaw
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
    </Box>
  );
}
