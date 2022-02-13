import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class TentangSaya extends Component {
  render() {
    return (
      <div
        className='content-body'
        style={{
          overflow: 'auto',
          height: 'inherit'
        }}
      >
        <Grid className='content-grid2'>
          <Cell col={3}>
            <div className='content-list'>
              
              <h4>Varell</h4>
              <hr style={{ borderTop: '3px solid #833fb2' }} />
              <center>
                
                <p>
                  Email:
                  
                    varellsmanpat@gmail.com
               
                </p>
                <p>
                  Github:
                  
                    varells14
                  
                </p>
              </center>
            </div>
          </Cell>

          <Cell
            className='resume-right-col'
            col={9}
            style={{ marginBottom: '90px' }}
          >
            <h4>Tentang Saya</h4>
            <Grid>
              <Cell col={4}>
                <p>Alamat :</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                  Kemang Pratama 2 Kota Bekasi
                </h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>No Telepon :</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                  08111-351-200
                </h5>
              </Cell>
            </Grid>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            
            <Grid>
              <Cell col={4}>
                <p>Sekolah Dasar :</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>SD Cisuda 2 Kota Sukabumi </h5>
              </Cell>
              <Cell col={4}>
                <p>Sekolah Menengah Pertama : </p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>SMP 6 Kota Sukabumi</h5>
              </Cell>
              <Cell col={4}>
                <p>Sekolah Menengah Atas :</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                 SMA 3 Kota Tanjung Pinang
                </h5>
              </Cell>
              <Cell col={4}>
                <p>Perguruan Tinggi :</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                 Universitas Komputer Indonesia
                </h5>
              </Cell>
              
              
            </Grid>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default TentangSaya;
