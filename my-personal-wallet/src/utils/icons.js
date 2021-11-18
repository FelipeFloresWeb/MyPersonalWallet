import usd from 'cryptocurrency-icons/svg/color/usd.svg';
import usdt from 'cryptocurrency-icons/svg/color/usdt.svg';
import gbp from 'cryptocurrency-icons/svg/color/gbp.svg';
import btc from 'cryptocurrency-icons/svg/color/btc.svg';
import ltc from 'cryptocurrency-icons/svg/color/ltc.svg';
import eur from 'cryptocurrency-icons/svg/color/eur.svg';
import jpy from 'cryptocurrency-icons/svg/color/jpy.svg';
import cny from 'cryptocurrency-icons/svg/color/cny.svg';
import eth from 'cryptocurrency-icons/svg/color/eth.svg';
import xrp from 'cryptocurrency-icons/svg/color/xrp.svg';
import doge from 'cryptocurrency-icons/svg/color/doge.svg';

const getIcon = (curr) => {
  switch (curr) {
    case 'usd':
      return usd;
    case 'usdt':
      return usdt;
    case 'cad':
      return usd;
    case 'gbp':
      return gbp;
    case 'ars':
      return usd;
    case 'btc':
      return btc;
    case 'ltc':
      return ltc;
    case 'eur':
      return eur;
    case 'jpy':
      return jpy;
    case 'chf':
      return usd;
    case 'aud':
      return usd;
    case 'cny':
      return cny;
    case 'ils':
      return usd;
    case 'eth':
      return eth;
    case 'xrp':
      return xrp;
    case 'doge':
      return doge;
    default:
      return false;
  }
};

export default getIcon;
