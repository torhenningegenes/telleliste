function CurrentDate() {
  // Creating date object.
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString("nb-No", options);
  const time = new Date().toLocaleTimeString();
  const currentDate = `${date} KL: ${time}`;

  const ukedager = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];

  // const day = date.getDay();
  // const currentDay = ukedager[date.getDay()];
  // console.log(day);

  // console.log(currentDate);
  // const dayAndDate = currentDay + " " + currentDate;
  return (
    <h5 className="ms-2 text-gray-700 uppercase leading-3 mt-4">
      {currentDate}
    </h5>
  );
}

export default CurrentDate;
