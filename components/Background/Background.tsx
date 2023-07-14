// import Image from 'next/image';
import Shader from './Shader';

function Background() {
  return (
    <div className="w-full h-full object-cover fixed top-0 left-0 z-[-1]">
      <Shader />
      {/* <Image
        className="w-full h-full object-cover fixed top-0 left-0 z-[-1]"
        src="/images/background.jpg"
        fill
        alt="Background"
        priority
        quality={100}
        sizes="100vw"
      /> */}
    </div>
  );
}
export default Background;
