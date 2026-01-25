'use client';

import { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemText, Stack, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const links = [
  { href: '#obuca', label: 'Obuca' },
  { href: '#guma', label: 'Tehnicka guma' },
  { href: '#hemija', label: 'Hemija' },
  { href: '#proizvodnja', label: 'Proizvodnja' },
  { href: '#kontakt', label: 'Kontakt' }
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setOpen(true)}
        startIcon={<MenuIcon />}
        sx={{
          borderRadius: 999,
          borderColor: 'rgba(20,19,18,0.2)',
          color: '#141312',
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          padding: '8px 14px',
          '&:hover': { borderColor: '#141312', backgroundColor: 'rgba(20,19,18,0.04)' }
        }}
        className="mobile-menu-trigger"
      >
        Meni
      </Button>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <div className="mobile-drawer">
          <div className="mobile-drawer-header">
            <span className="eyebrow">Navigacija</span>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <List className="mobile-drawer-list">
            {links.map((link) => (
              <ListItemButton
                key={link.href}
                component="a"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <Stack spacing={1.5} className="mobile-drawer-actions">
            <Button variant="outlined" href="#obuca" onClick={() => setOpen(false)}>
              Katalog
            </Button>
            <Button variant="contained" href="#b2b" onClick={() => setOpen(false)}>
              B2B upit
            </Button>
          </Stack>
        </div>
      </Drawer>
    </>
  );
}
