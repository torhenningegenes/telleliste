function VelgAvdeling(props) {
  // function
  const { avdeling } = props;
  const clickHandler = function () {
    console.log("click");
  };
  return (
    <>
      <button
        className="bg-sky-700 text-sky-100  rounded-full w-40 h-12 mt-5 mb-4 text-center hover:bg-sky-500 hover:text-gray-600"
        onClick={clickHandler}
      >
        {avdeling}
      </button>
    </>
  );
}

export default VelgAvdeling;
