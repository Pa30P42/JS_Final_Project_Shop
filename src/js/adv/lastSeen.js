export const LAST_SEEN = 'lastSeen';

function updateLastSeen(id, time) {
  const lastSeenData = localStorage.getItem(lastSeen); //массив с просмотренными элементами
  let lastSeen = JSON.parse(lastSeenData);
  if (!lastSeen) {
    lastSeen = [];
  }
  const item = lastSeen.find(elem => elem.id === id);
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

// export default updateLastSeen;
