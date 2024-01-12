import { Map as MapWrapper, Marker, ZoomControl } from 'pigeon-maps';

export const Map = () => {
  return (
    <div>
      <MapWrapper height={400} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <ZoomControl />
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </MapWrapper>
    </div>
  );
};
