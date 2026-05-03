import { RouterProvider } from 'react-router';
import { router } from './routes';
import '../styles/theme.css';
import '../styles/fonts.css';

export default function App() {
  return <RouterProvider router={router} />;
}
