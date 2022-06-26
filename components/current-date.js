function CurrentDate() {
  const ukedager = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];
  const date = new Date();
  const day = date.getDay();
  const currentDay = ukedager[date.getDay()];
  // console.log(day);
  const currentDate = date.toLocaleDateString();
  // console.log(currentDate);
  const dayAndDate = currentDay + " " + currentDate;
  return <div className="ms-2">{dayAndDate}</div>;
}

export default CurrentDate;
