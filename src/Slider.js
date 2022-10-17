import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import { Carousel, Section } from 'react-materialize';

M.AutoInit();
export default function Slider() {

    return (
        <Section style={{ backgroundColor: 'black' }}>
            <Carousel
                carouselId="Carousel-55"
                className="carousel center"
                options={{
                    duration: 500,
                    fullWidth: true,
                    indicators: true
                }}
            >
                <div className="">
                    <img style={{ width: '80%', height: 'auto' }} src="https://occ-0-448-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQo_z6DGFlL05S1FnDi0FXMJtZWJb5ScDWLBZeuXWDePE2u1x2qJk8OdAXRLSyjK_UrldWkdc0zZJAcoGDpx-kiETTG2oLEkuWGPpuUryngu.png?r=563" />
                </div>
                <div className="">
                    <img style={{ width: '90%', height: 'auto' }} src="https://img.freepik.com/premium-vector/cinema-poster-night-film-movies-popcorn-retro-movie-posters-template-illustration-set_102902-1871.jpg?w=2000" />
                </div>
                <div>
                    <img style={{ width: '90%', height: 'auto' }} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classic-movies-1661199935.jpg?crop=1.00xw:0.503xh;0,0.247xh&resize=1200:*" />
                </div>
            </Carousel>
        </Section>

    )
}
