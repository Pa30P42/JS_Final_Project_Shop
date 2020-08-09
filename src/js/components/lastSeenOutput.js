const LAST_SEEN = 'lastSeen';
import moment from 'moment';

const showLastSeen = products => {
  const lastSeenProducts = [];
  if (!localStorage.getItem(LAST_SEEN)) {
    return lastSeenProducts;
  }
  const lastSeenData = localStorage.getItem(LAST_SEEN);
  const arrayFromLS = JSON.parse(lastSeenData);
  const end = moment(Date.now());
  const lastTwoDaysSeen = arrayFromLS.filter(item => {
    let diff = end.diff(item.time);
    let daysCount = moment.utc(diff).format('D');
    return daysCount <= 2;
  });
  localStorage.setItem(LAST_SEEN, JSON.stringify(lastTwoDaysSeen));
  const lastSeenIds = lastTwoDaysSeen.map(({ id }) => id);
  const itemsCount = lastSeenIds.length;
  for (let i = 0; i < itemsCount; i += 1) {
    const product = products.find(item => item._id === lastSeenIds[i]);
    lastSeenProducts.push(product);
  }
  return lastSeenProducts;
};

export default showLastSeen;
