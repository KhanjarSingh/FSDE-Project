import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { describe, it, expect, vi } from 'vitest';
describe('Navbar Component', () => {
  const setUser = vi.fn();
  const user = { name: 'Test User', isAdmin: false };
  it('renders brand name', () => {
    render(<BrowserRouter><Navbar user={null} setUser={setUser} /></BrowserRouter>);
    expect(screen.getByText(/MiniShop/i)).toBeDefined();
  });
  it('shows Login link when user is not logged in', () => {
    render(<BrowserRouter><Navbar user={null} setUser={setUser} /></BrowserRouter>);
    expect(screen.getByText(/Login/i)).toBeDefined();
  });
});
