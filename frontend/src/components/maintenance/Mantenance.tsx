import { FC, JSX, useMemo } from 'react';

import Image from 'next/image';

import CountDownTimer from '@/components/ui/countdown';
import { useSettingsStore } from '@/store/settings';
import { IImage, IOverlay } from '@/types';
import fontClass from '@/utils/get-font-classes';

const TitleMaintenance: FC<{ title?: string }> = ({ title }): JSX.Element => {
  if (!title) {
    return <></>;
  }
  return <h2 className="mt-12 text-5xl font-medium">{title}</h2>;
};

const DescriptionMaintenance: FC<{ description?: string }> = ({
  description,
}): JSX.Element => {
  if (!description) {
    return <></>;
  }
  return <p className="text-base font-light">{description}</p>;
};

const ImageMaintenace: FC<{ image?: IImage }> = ({ image }): JSX.Element => {
  if (!image) {
    return <></>;
  }
  return (
    <div className="absolute left-0 top-0 z-10 h-full w-full bg-no-repeat opacity-40">
      <Image
        alt="Maintenance mode background"
        className="object-contain object-bottom"
        fill={true}
        src={image.original}
      />
    </div>
  );
};

const OverlayColorMaintenance: FC<{ overlayColor: IOverlay }> = ({
  overlayColor: { isOverlayColor, overlayColor, overlayColorRange },
}): JSX.Element => {
  if (!isOverlayColor) {
    return <></>;
  }
  return (
    <div
      className="absolute left-0 top-0 z-10 h-full w-full"
      style={{ backgroundColor: overlayColor, opacity: overlayColorRange }}
    />
  );
};

const LogoMaintenance: FC = (): JSX.Element => {
  return (
    <h1 className="bg-gradient-to-r from-gray-800 via-green-800 to-lime-600 bg-clip-text font-lobster text-6xl font-bold uppercase text-transparent drop-shadow-lg">
      Ivan Caviedes
    </h1>
  );
};

const MaintenanceMode: FC = (): JSX.Element => {
  const {
    maintenance: { start, until, title, description, image, overlay },
  } = useSettingsStore((e) => e.settings);

  const maintenanceDate = useMemo(() => {
    return new Date(start ? (until as string) : (start as string));
  }, [start, until]);
  // fontClass;
  return (
    <main
      className={`relative flex h-screen w-full flex-col items-center justify-center text-center ${fontClass} px-4 md:px-0`}
    >
      <header className="z-20 mb-10">
        <LogoMaintenance />
      </header>

      <section className="relative z-30 mx-auto flex max-w-4xl flex-col gap-8 rounded-3xl bg-white p-5 shadow-2xl">
        <TitleMaintenance title={title} />
        <DescriptionMaintenance description={description} />

        <div className="my-8 lg:mt-12">
          <CountDownTimer date={maintenanceDate} />
        </div>
      </section>

      <ImageMaintenace image={image} />
      <OverlayColorMaintenance overlayColor={overlay} />
    </main>
  );
};

export default MaintenanceMode;
