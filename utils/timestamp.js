const timestamp = Date.now();
const date = new Date(timestamp);

const formattedDate = date.toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

export default formattedDate;
