import Image from "next/image";
import wave from "../img/Wave.svg";
import waveMobile from "../img/Wave-mobile.svg";
import LoginUser from "../context/login";

function LoginPage() {
  return (
    <>
      <div className="min-h-screen">
        <div className="md:hidden">
          <Image
            src={waveMobile}
            layout="responsive"
            className="z-0 absolute top-0 left-0 min-h-screen"
          />
        </div>

        <div className="md:block hidden">
          <Image
            src={wave}
            layout="responsive"
            className="z-0 absolute top-0 left-0 min-h-screen"
          />
        </div>
        {/* <container
    //   className="d-flex align-items-center justify-content-center "
    //   style={{ minHeight: "100vh" }}
    // >
    //   <div className="w-100 " style={{ maxWidth: "400px" }}>
    
    //   </div>
    // </container> */}
        <LoginUser className="" />
      </div>
    </>
  );
}

export default LoginPage;
