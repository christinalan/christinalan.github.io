function preLoader() {

  //counter
  var i = 0;

  //create object
  imageObj = new Image();

  //set image list
  images = new Array();
  images[0]="/img/Slantd_Issue02_LooseSkins_ChristinaLan_1_s.png"
  images[1]="/img/Slantd_Issue02_LooseSkins_ChristinaLan2_s.png"
  images[2]="/img/Slantd_Issue02_LooseSkins_ChristinaLan3_s.png"
  images[3]="/img/Slantd_Issue02_LooseSkins_ChristinaLan4_s.png"
  images[4]="/img/Slantd_Issue02_LooseSkins_ChristinaLan5_s.png"
  images[5]="/img/Slantd_Issue02_LooseSkins_ChristinaLan6_s.png"
  images[6]="/img/10s.png"
  images[7]="/img/lala_s.gif"
  images[8]="/img/scarf2.gif"
  images[9]="/img/honey.gif"
  images[10]="/img/cutafter_forever_s.gif"
  images[11]="/img/justhands_s.jpg"
  images[12]="/img/mirrormirrorwhat_s.jpg"
  images[13]="/img/meltblackf_s.png"
  images[14]="/img/mirrormirroroppo_s.png"
  images[15]="/img/new2_s.png"
  images[16]="/img/winter1_small.jpg"
  images[17]="/img/39_s.png"
  images[18]="/img/22_s.png"
  images[19]="/img/34_s.png"
  images[20]="/img/meltblackf_s.png"
  images[21]="/img/mm2_s.png"
  images[22]="/img/weird_s.gif"
  images[23]="/img/DSC_2267_small.jpeg"

  //start preloading
  for(i=0; i<=24; i++)
  {
    imageObj.src=images[i];
  }

}
