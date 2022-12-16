import AppStoreUA from '@assets/svit-home/overview/app-store-ua.png';
import GooglePlayUA from '@assets/svit-home/overview/google-play-ua.png';
import Image from 'next/image';

const DownloadUA: React.FC = () => {
  return (
    <>
      <a
        href="https://play.google.com/store/apps/details?id=com.hommetech"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <Image src={GooglePlayUA} alt="" />
      </a>
      <a href="https://apps.apple.com/ua/app/homme/id1492379765" target="_blank" rel="nofollow noopener noreferrer">
        <Image src={AppStoreUA} alt="" />
      </a>
    </>
  );
};

export default DownloadUA;
