import React from 'react'
import { geolocated } from 'react-geolocated'
import { Map, TileLayer, Marker } from 'react-leaflet'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'

const ContainerMap = styled(Map)`
  height: 20vh;
  width: 100%;
`

const GridContainer = styled(Grid)`
  flex-grow: 1;
`

class Mappable extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>
        O seu navegador atual não consegue nos fornecer a sua localização.
      </div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>
        Você deve liberar o acesso a sua localização para o pleno funcionamento
        do site.
      </div>
    ) : this.props.coords ? (
      <Container>
        <GridContainer>
          <ContainerMap
            center={[this.props.coords.latitude, this.props.coords.longitude]}
            zoom={14}
          >
            <TileLayer
              url={
                'https://api.mapbox.com/styles/v1/jonathanabila/cjsyiuvy91btl1fo75hnfnkni/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9uYXRoYW5hYmlsYSIsImEiOiJjazd1cWR6dnQwMDEyM29ueWlxbjJ3cmxtIn0.E7VWlVyuMfjNgq8c2SQH-g'
              }
            />
            <Marker
              position={[
                this.props.coords.latitude,
                this.props.coords.longitude
              ]}
            />
          </ContainerMap>
        </GridContainer>
      </Container>
    ) : (
      <div>Recuperando os dados sobre a sua localização. </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  watchPosition: true,
  userDecisionTimeout: 5000
})(Mappable)
