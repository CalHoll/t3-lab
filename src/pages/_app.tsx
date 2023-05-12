import { type AppType } from 'next/app';

import { api } from '~/utils/api';

import '~/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <div>
      <Toaster position="bottom-center" />

      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </div>
  );
};

export default api.withTRPC(MyApp);
