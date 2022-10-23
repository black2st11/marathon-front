import React, { useEffect, useRef } from 'react'
import * as S from './style'

const Map = ({ lat = 34.892169, lng = 127.530361, content = '주소' }) => {
    const mapElement = useRef(null)

    useEffect(() => {
        const { naver } = window
        if (!mapElement.current || !naver) return

        const location = new naver.maps.LatLng(lat, lng);
        const mapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);

        const marker = new naver.maps.Marker({
            position: location,
            title: content,
            visible: true,
            map,
        });

        const infoWindow = new naver.maps.InfoWindow({
            content: `<p>${content}</p>`
        })

        naver.maps.Event.addListener(marker, "click", () => {
            if (infoWindow.getMap()) {
                infoWindow.close()
            } else {
                infoWindow.open(map, marker)
            }
        })

        infoWindow.open(map, marker)
    }, [])



    return (
        <S.Container ref={mapElement} />
    )
}

export default Map