export function getRef(state) {
  const hasShopHash =
    _.get(state, 'routing.locationBeforeTransitions.hash') === config.shopHash;
  const ref = _.get(state, 'routing.locationBeforeTransitions.state.ref');
  const isCompanyAd = _.get(ref, 'adInfo.company_ad') === '1';
  const pageName = _.get(ref, 'pageName');
  const currentHash =
    state.routing.locationBeforeTransitions.hash &&
    state.routing.locationBeforeTransitions.hash.replace('#', '');
  if (pageName === 'listing') {
    return 2;
  } else if (pageName === 'adview') {
    if (hasShopHash) {
      return 4;
    } else if (!isCompanyAd) {
      return 3;
    }
    return 5;
  } else if (currentHash.includes('stickyad')) {
    return 11;
  } else if (currentHash.includes('galleryad')) {
    return 12;
  }
  if (hasShopHash) {
    return 6;
  }
  return 1;
}
