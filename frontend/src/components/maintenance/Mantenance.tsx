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
  return <h2 className="mt-8 text-3xl font-medium md:text-5xl">{title}</h2>; // Ajuste de tamaño para móvil
};

const DescriptionMaintenance: FC<{ description?: string }> = ({
  description,
}): JSX.Element => {
  if (!description) {
    return <></>;
  }
  return <p className="text-sm font-light md:text-base">{description}</p>; // Ajuste de tamaño para móvil
};

const LogoMaintenance: FC = (): JSX.Element => {
  return (
    <h1 className="bg-gradient-to-r from-gray-800 via-green-800 to-lime-600 bg-clip-text font-lobster text-4xl font-bold uppercase text-transparent drop-shadow-lg md:text-6xl">
      Ivan Caviedes
    </h1>
  );
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

const MaintenanceMode: FC = (): JSX.Element => {
  const {
    maintenance: { start, until, title, description, image, overlay },
  } = useSettingsStore((e) => e.settings);

  const maintenanceDate = useMemo(() => {
    return new Date(start ? (until as string) : (start as string));
  }, [start, until]);

  return (
    <main
      className={`relative flex min-h-screen w-full flex-col items-center justify-center text-center ${fontClass} px-4 md:px-0`}
    >
      <header className="z-20 mb-6 md:mb-10">
        <LogoMaintenance />
      </header>

      <section className="relative z-30 mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-3xl bg-white p-5 shadow-2xl md:gap-8">
        <TitleMaintenance title={title} />
        <DescriptionMaintenance description={description} />

        <div className="my-6 lg:mt-10">
          <CountDownTimer date={maintenanceDate} />
        </div>
      </section>

      <ImageMaintenace image={image} />
      <OverlayColorMaintenance overlayColor={overlay} />
    </main>
  );
};

export default MaintenanceMode;
