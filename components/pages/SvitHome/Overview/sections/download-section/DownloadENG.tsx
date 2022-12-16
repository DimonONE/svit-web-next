import AppStoreENG from '@assets/svit-home/overview/app-store-eng.png';
import GooglePlayENG from '@assets/svit-home/overview/google-play-eng.png';
import Image from 'next/image';

const DownloadENG: React.FC = () => {
  return (
    <>
      <a
        href="https://play.google.com/store/apps/details?id=com.hommetech"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <Image src={GooglePlayENG} alt="" />
      </a>
      <a href="https://apps.apple.com/ua/app/homme/id1492379765" target="_blank" rel="nofollow noopener noreferrer">
        <Image src={AppStoreENG} alt="" />
      </a>
    </>
  );
};

export default DownloadENG;
