function VelgAvdeling(props) {
  // function
  const { avdeling, valgtAvdeling, setValgtAvdeling } = props;

  const clickHandler = function () {
    console.log("click");

    setValgtAvdeling({ value: avdeling, label: avdeling });
    console.log(valgtAvdeling);
  };
  return (
    <>
      <button
        className="bg-sky-700 text-sky-100 w-20 h-20 rounded-full md:w-40 md:h-12 mt-2 mb-4 text-center hover:bg-sky-500 hover:text-gray-600 focus:bg-lime-400 focus:text-green-900"
        onClick={clickHandler}
      >
        {avdeling}
      </button>
    </>
  );
}

export default VelgAvdeling;
