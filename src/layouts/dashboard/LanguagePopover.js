import {useEffect, useRef, useState} from 'react';
// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';
import DOCUMENTS from "../../_mocks_/document";

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'jp',
    label: 'Japanese',
    icon: '/static/icons/ic_flag_jp.svg'
  },
  {
    value: 'vn',
    label: 'Vietnamese',
    icon: '/static/icons/ic_flag_vn.svg'
  }
];

// ----------------------------------------------------------------------

function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (language) => {
    i18n.changeLanguage(language);
    if (language === 'jp') setLang(0)
    if (language === 'vn') setLang(1)
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <img src={LANGS[lang].icon} alt={LANGS[lang].label} />
      </IconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
        <Box sx={{ py: 1 }}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[lang].value}
              onClick={() => handleClose(option.value)}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  );
}

export default withNamespaces()(LanguagePopover);
