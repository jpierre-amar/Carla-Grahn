const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Images from the original site (extracted from network requests)
const imageUrls = [
  // Sculptures
  { url: 'http://lh3.ggpht.com/Jy-ICVfrrNRyvW2mGl23jZHAaIRMJCgfzJm9BWtuAj3MnsS0f8eZJ41RWvc-RR8_ELDBlIt8XvqpduqVrhCs=s800', name: 'sculpture-1.jpg', category: 'sculpture' },
  { url: 'http://lh6.ggpht.com/TvWzXjdVXsZG-2v_ftDlE2pYHQNqrLBQfYoqrR1hxlXQX-Q79Z--dQzb9vtXurZN-JI44zRfMoXSAUVj_MmF=s800', name: 'sculpture-2.jpg', category: 'sculpture' },
  { url: 'http://lh4.ggpht.com/bdGCRadl-0hESCMcq_kaVuF4OLMXBhzcnOE8Sv8LIQdxyR2XBihLec_mXIc4f7vVrSbKFEMP7LDWCNHJchI=s800', name: 'sculpture-3.jpg', category: 'sculpture' },
  { url: 'http://lh3.ggpht.com/pjWzNdK_yIRTB7TcuLv90pMEzZh9y1PbF7oQrUV7Ig2Uesosgu-COi5CrEEzx4Kt-demisM87T6boPnMPObeIENg=s800', name: 'sculpture-4.jpg', category: 'sculpture' },
  { url: 'http://lh6.ggpht.com/qb4iVjy48l6zgxZnDJLFwg1-jTGb903dPtUen_5I9Vza8n8YfpJSCWp7JuwadcYzlCMPcl-ra91eZ22SUhKkmomjqdE=s800', name: 'sculpture-5.jpg', category: 'sculpture' },
  { url: 'http://lh3.ggpht.com/_uIOd7bUrPV_tSGqscANbSgxFlOI28uiTpTK-_BwnJ5ZZvKerOptwZPH76UtewNVm06Uy7JuCLmANthtTceSVCOx=s800', name: 'sculpture-6.jpg', category: 'sculpture' },
  { url: 'http://lh3.googleusercontent.com/rdZ-YkyXzGBIJiRKqhcwsYa_rFIn3VPJQj-8t2VrD4bCRqninTHv9la_r_dURG9mWBFhGSxrKJbRqgxzLv2Oc0jT=s800', name: 'sculpture-7.jpg', category: 'sculpture' },
  { url: 'http://lh3.googleusercontent.com/DlM9RmDsvBWv_oSpThoVlIohxiEOEMN5PnQaxjj21bZGLEw589UbGSmw9Sc3XfT5yvuCi3dc894el8l_C2tbumigKwY=s800', name: 'sculpture-8.jpg', category: 'sculpture' },
  { url: 'http://lh3.googleusercontent.com/I64wvKoe4W6-iTF7qMZkMYqbHhQkDlRAh6aFLHvX5sdCq_JtBwG4sbKW1D69P2wbqWr_ECeczXYfAdZ1zsvGe_xRMQ=s800', name: 'sculpture-9.jpg', category: 'sculpture' },
  { url: 'http://lh3.googleusercontent.com/aofXD_jB6vq8IGYugSehqFfSas_FK1HqWa-GY8gBYQ6_oTuZ8v0Kw4vJBsjxBGt556yExjUZ81jsx7OFbHNprNyJl7w=s800', name: 'sculpture-10.jpg', category: 'sculpture' },
  
  // Furniture
  { url: 'http://lh3.googleusercontent.com/GhsaXAmPIA35jcZTW_wJi3K7gzpVmjrp7uzTjmLr_qFNDyoWoJDrBSo4WQVZ2-GLxTzoKZbmamp5W_-25ye5KOzG=s800', name: 'furniture-1.jpg', category: 'furniture' },
  { url: 'http://lh3.googleusercontent.com/L5ZZZJF4YJMNcMzzpp0v_l7hQg5QiU18g7zmCkYsuCVdMqJLJYElOeXLNr5MGUz5PL_rdi9rT2DHTMpnvGi6SLjGRQ=s800', name: 'furniture-2.jpg', category: 'furniture' },
  { url: 'http://lh6.ggpht.com/RZa4KFaJ4fEAcNKSnIcMf9CpNKsWyAEkfSgYkTfPWybYfPHb3D_YG_75MdgHTtfTOSIo_YjpAUcSwTjylw=s800', name: 'furniture-3.jpg', category: 'furniture' },
  { url: 'http://lh4.ggpht.com/Bbxp9t5DLLmcYJ7hWGvXJ4ONtJxsQmg7lqqFZXp2SSKLwoG4uVcC3LVwv7NGH2vDxPwe_n8vS5KrDD_L5Ocb=s800', name: 'furniture-4.jpg', category: 'furniture' },
  { url: 'http://lh3.ggpht.com/0RQXP-AB1VhkvOjq74LOqZApvD4ygSdgwhqhE2L6CJCNlZk0y5-AMpoieRfy4pKFrMX7B7L03xm7T_yrSkplY2KKvDE=s800', name: 'furniture-5.jpg', category: 'furniture' },
  { url: 'http://lh6.ggpht.com/QT3ATGrl-tSYA73FRFfBVrJfoqumuNQ23P_Eq0baiW5vMDL1w2A5mSQmuhblnkDXPwvJ-Yswd3AAQzoUv54=s800', name: 'furniture-6.jpg', category: 'furniture' },
  { url: 'http://lh5.ggpht.com/iMeUba-9QmLX-mQHa4M20Pftqrwp-BVDmHCAJaZseublQTygq9uDSzBJfVCNFZnG1Pu3Nstw9u97taRGtvF6_bBlSg=s800', name: 'furniture-7.jpg', category: 'furniture' },
  { url: 'http://lh5.ggpht.com/O_h0c3bn4MQ5rI8ylBbmrnCiRJE4hFkCrRX6rIg5fQj9SBKB0hZAzqUaarfATW85IjPId9oO8oe1x56KPYc=s800', name: 'furniture-8.jpg', category: 'furniture' },
  
  // Commissions
  { url: 'http://lh6.ggpht.com/Lnz0p-k2zmGZ532Pfab-OgOEZOH__tWXYhmwvOhhk7ktgA2R-n-tTvux7wZbwbpKWecOP2-DwjXxhlFU12uWXrQ47-8=s800', name: 'commission-1.jpg', category: 'commissions' },
  { url: 'http://lh4.ggpht.com/BxCAnNsHLECYQeJAzjSdA3S2iyEiFewL6lFzSNdwM79I1rl6dx0_knduJ1jEoPYv6UBaXOQVT4AEICXITTtp24pBAw=s800', name: 'commission-2.jpg', category: 'commissions' },
  { url: 'http://lh4.ggpht.com/S_DSNJaid0Jv1lGd6jQJkggcMxDE-T4k_SyPuCB7wA0JX6-m0OldM4MJjJILvr2blvUimpu8FfUT_hlYpyw=s800', name: 'commission-3.jpg', category: 'commissions' },
  { url: 'http://lh3.ggpht.com/iBxHGTvuobsvd5OrmBZJMd6BaRAwz34ldV0QcXUjYLzJCSEDFs1Ffw-xj90AgxmsMinDUMR6sKSTAK_UGxtc=s800', name: 'commission-4.jpg', category: 'commissions' },
  { url: 'http://lh3.googleusercontent.com/ny_V6mP7HDJNTL5TLJleeyxTxpA1zo-luNW9ug2dBCe7-atCBUQNjoqkvY_5aHTCtla_2LwFfrp9G7Df7_V07pRYGi8=s800', name: 'commission-5.jpg', category: 'commissions' },
  { url: 'http://lh3.googleusercontent.com/Phu7QHVWC8mqhVOwtnJriOcmbcZWCP0sOjMjojnrpn9L5d1U1mE8DTlBNPQlVozWF2FjeLpuzTncZ6a5-1g97GFmEA=s800', name: 'commission-6.jpg', category: 'commissions' },
  { url: 'http://lh3.googleusercontent.com/12xjPDkrDESYJmKMiaWCEPxEi4JdSAtGiSBJeBMlka1V1H--JprsCLBf9JT2-Z3NRreAMrHRRmtFLvmlLbzkhtzg6cI=s800', name: 'commission-7.jpg', category: 'commissions' },
  { url: 'http://lh3.googleusercontent.com/C0axWE-NFpBvhsCXpdTswoUCDk5cnHrQkMlaxfIP2czA3FuQJABnJIUrYD-WJxgWWcFt57dPd7KB6U5wrhIysM_9GQ=s800', name: 'commission-8.jpg', category: 'commissions' },
  
  // About/Hero images
  { url: 'http://lh3.googleusercontent.com/rayfEaOD6y3Q37yKyHjrz0ocAO3Ty92hDxBaArSimzM4VgKxmMUDVl8vaQJENKITwm6NdDUjXq3xsiJaZXdeVWS560g=s800', name: 'about-1.jpg', category: '' },
  { url: 'http://lh3.googleusercontent.com/EI4ewtuoZhks4ACxvVh6Jx1n2kxXjjIx_6tKhJp-tLBGDKpoNoP4KeTGTZTeoxVY9ThZwC9EhQlqXJlENaT03quxB7Y=s800', name: 'hero.jpg', category: '' },
  { url: 'http://lh5.ggpht.com/WiUiIXQxu7mp3kzv4Lw2jhMhR3uoCnDEuDvNWEFfdNcFmbYvU1yKn_lMbRG9ATL985fcLE9E4kmhFNh7gW0=s800', name: 'about-2.jpg', category: '' },
  { url: 'http://lh3.googleusercontent.com/R6qoelDzhVFUF9eT8LpxeAptgiCFboeYss3hEDKl60WNlR9rIPJ8zH9_rh_dWZqWVX5uXN4lITgimgvxY1D36uXNgUc=s800', name: 'about-3.jpg', category: '' },
  { url: 'http://lh3.googleusercontent.com/OLn0XSsdUti-KVEqUQnzg7pZ38xl6Zf793PcOXTRB1Reets8AnhEoykpE3uu4iSenSv6QBFlAIrPN6lL01RbOQIHvA=s800', name: 'sculpture-11.jpg', category: 'sculpture' },
  { url: 'http://lh3.googleusercontent.com/DPYyCL3eJywdeX7ksUYqZpOnpLK67wQIms1clhuZ3joi1e6DGD1mw7APEv_HeNHYHT6GE-dVZPbOXs9ERi-krfiRpQ=s800', name: 'sculpture-12.jpg', category: 'sculpture' },
  { url: 'http://lh3.googleusercontent.com/fYfB3Ymdk3ZAqcxMkB_iDqB1qXso43LSEKC7s-U_0l_XFU27O37bhecDfesI5Cf_jppl-mycCXWO1NhIR6RcXgCTQA=s800', name: 'furniture-9.jpg', category: 'furniture' },
  { url: 'http://lh3.googleusercontent.com/5wSxs5kYjEtkjA4LtmlzZPuUhWE8tLB-5-MYJMLQFascMjjxelMEod7XvX1LDCwAsPGlEqCU04P_tCvumw1FTp6F0g=s800', name: 'furniture-10.jpg', category: 'furniture' },
  { url: 'http://lh3.googleusercontent.com/yjzqwUxFltCYfcp_N_bNpf6bqRkbIC3KY24rhhn9UHIZD6EKClfp4an8m-D39YRtCrmaJ29kv0B9V-J7lWOhuXun=s800', name: 'sculpture-13.jpg', category: 'sculpture' },
];

function downloadImage(imageInfo) {
  return new Promise((resolve, reject) => {
    const destFolder = imageInfo.category 
      ? `public/images/${imageInfo.category}` 
      : 'public/images';
    const destPath = path.join(destFolder, imageInfo.name);
    
    // Check if file already exists
    if (fs.existsSync(destPath)) {
      console.log(`Skipping ${imageInfo.name} - already exists`);
      resolve();
      return;
    }
    
    const protocol = imageInfo.url.startsWith('https') ? https : http;
    
    const file = fs.createWriteStream(destPath);
    
    protocol.get(imageInfo.url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        const redirectProtocol = redirectUrl.startsWith('https') ? https : http;
        redirectProtocol.get(redirectUrl, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${imageInfo.name}`);
            resolve();
          });
        }).on('error', (err) => {
          fs.unlink(destPath, () => {});
          console.error(`Error downloading ${imageInfo.name}: ${err.message}`);
          resolve(); // Continue with other downloads
        });
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${imageInfo.name}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      console.error(`Error downloading ${imageInfo.name}: ${err.message}`);
      resolve(); // Continue with other downloads
    });
  });
}

async function downloadAll() {
  console.log(`Starting download of ${imageUrls.length} images...`);
  
  // Download in batches of 5 to avoid overwhelming the server
  for (let i = 0; i < imageUrls.length; i += 5) {
    const batch = imageUrls.slice(i, i + 5);
    await Promise.all(batch.map(downloadImage));
  }
  
  console.log('Download complete!');
}

downloadAll();

