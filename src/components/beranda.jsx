import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Beranda extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='beranda-grid'>
          <Cell col={12}>
            
            <div className='banner-text'>
              <br></br>
              <h1>Varell</h1>
              <hr />
              <p>
                Saya adalah mahasiswa di Universitas Komputer Indonesia.
              </p>
              <div className='social-links'>
                <a
                  href='https:/instagram.com/vrll14'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i
                    className='fa fa-instagram fa-3x social'
                    aria-hidden='true'
                  />
                </a>
                <a
                  href='https://github.com/varells14/varell'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github fa-3x social' aria-hidden='true' />
                </a>
                <a
                  href='https://www.linkedin.com/in/varell varell/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i
                    className='fa fa-linkedin fa-3x social'
                    aria-hidden='true'
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Beranda;
