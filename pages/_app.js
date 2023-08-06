import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store/index';
import Navigation from '@/components/Navigation';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navigation/>
      <Component {...pageProps} />
    </Provider>
    );
}
