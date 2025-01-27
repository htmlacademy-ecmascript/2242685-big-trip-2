const CURRENT_DATE = new Date();
const DATA_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'; //"2019-07-10T22:55:56.845Z"
const EVENT_EDIT_DATE_FORMAT = 'DD/MM/YY HH:mm'; //'18/03/19 12:25'
const EVENT_VIEW_DATE_FORMAT = 'YYYY-MM-DD'; //<time class="event__date" datetime="2019-03-18">MAR 18</time>
const EVENT_VIEW_DAY_FORMAT = 'MMM DD'; //'MAR 18' (месяц - прописные!)
const EVENT_VIEW_TIME_FORMAT = 'HH:mm'; //'14:30'
const EVENT_VIEW_DURATION_TIME_FORMAT = 'HH[H] mm[M]'; //'01H 35M'
const SHOW_EVENTS_COUNT = 5;

const SortType = [
  {name: 'day', isDisabled: false},
  {name: 'event', isDisabled: true},
  {name: 'time', isDisabled: false},
  {name: 'price', isDisabled: false},
  {name: 'offer', isDisabled: true},
];

// const SortType = {
//   DAY: 'day',
//   EVENT: 'event',
//   TIME: 'time',
//   PRICE: 'price',
//   OFFER: 'offer',
// };

export {CURRENT_DATE, DATA_DATE_FORMAT, EVENT_EDIT_DATE_FORMAT, EVENT_VIEW_DATE_FORMAT, EVENT_VIEW_DAY_FORMAT, EVENT_VIEW_TIME_FORMAT, EVENT_VIEW_DURATION_TIME_FORMAT, SHOW_EVENTS_COUNT, SortType};
