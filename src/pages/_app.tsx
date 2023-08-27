import { useEffect, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '@/components/redux/store'
import { useAppDispatch } from '@/components/redux/hooks'
import { setLoading, setUser } from '@/components/redux/features/user/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/components/lib/Firebase'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (auth && user) {
        dispatch(setUser(user));

        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

 
  return (
 
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>

  );
}