import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import React from 'react';

export default function Chandler() {
  const offices = [
    {
      id: '1',
      field_address: {
        locality: 'Mesa',
        postal_code: '85212',
        address_line1: '2919 S. Ellsworth Road',
        address_line2: 'Suite 135',
        latitude: 33.362269636792085,
        longitude: -111.63499880143968,
      },

    },
  ];

  const [selectedOffice, setSelectedOffice] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const onClickMarker = (officeId) => {
    setSelectedOffice(offices.find((office) => office.id === officeId));
  };

  const center = {
    lat: 33.362269636792085,
    lng: -111.63499880143968,
  };
  return (
    <div className='App mx-auto rounded-2xl  bg-white '>
      {/* h-[40rem] */}
      {isLoaded && (
        <div className='  mx-auto rounded-2xl  '>
          <GoogleMap
            mapContainerClassName='c-office-overview__map'
            center={center}
            zoom={15}
          >
            {offices.map((office) => (
              <Marker
                key={office.id}
                onClick={() => onClickMarker(office.id)}
                position={{
                  lat: office.field_address.latitude,
                  lng: office.field_address.longitude,
                }}
              />
            ))}
            {selectedOffice && (
              <InfoWindow
                position={{
                  lat: selectedOffice.field_address.latitude,
                  lng: selectedOffice.field_address.longitude,
                }}
                onCloseClick={() => setSelectedOffice(null)}
              >
                <p>
                  {selectedOffice.field_address.address_line1}{' '}
                  {selectedOffice.field_address.address_line2} -{' '}
                  {selectedOffice.field_address.postal_code}{' '}
                  {selectedOffice.field_address.locality}
                </p>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      )}
    </div>
  );
}
