import { type AppType } from 'next/app';

import { api } from '~/utils/api';

import '~/styles/globals.css';
import { Toaster } from 'react-hot-toast';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />;
    </div>
  );
};

export default api.withTRPC(MyApp);
