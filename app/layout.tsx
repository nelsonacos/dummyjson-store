import { ReactQueryClient } from '@/react-query-provider/ReactQueryProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClient>{children}</ReactQueryClient>
      </body>
    </html>
  );
}