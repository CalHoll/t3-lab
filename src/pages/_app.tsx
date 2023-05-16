import { type AppType } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { api } from '~/utils/api';
import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
