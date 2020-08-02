const LAST_SEEN = 'lastSeen';

import apiUsers from '../api/users/apiUsers';

function updateLastSeen(id) {
  const lastSeenData = localStorage.getItem(LAST_SEEN); //массив
  let lastSeen = JSON.parse(lastSeenData);
  if (!lastSeen) {
    lastSeen = [];
  }
  const item = lastSeen.find(elem => elem.id === id);
  const time = new Date().getTime();
  if (!item) {
    lastSeen.push({
      id,
      time,
    });
  } else {
    lastSeen[lastSeen.indexOf(item)].time = time;
  }
  localStorage.setItem(LAST_SEEN, JSON.stringify(lastSeen));
}

export default updateLastSeen;
